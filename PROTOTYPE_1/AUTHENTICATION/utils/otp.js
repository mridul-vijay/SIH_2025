const crypto = require('crypto');
const Otp = require('../models/otpModel');
const { hashOtp, compareOtp } = require('./hash');

const OTP_EXPIRY_MINUTES = 5;
const OTP_LENGTH = 8;
const MAX_OTP_ATTEMPTS = 3;
const BLOCK_DURATION_MS = 60 * 60 * 1000; // 1 hour

// In-memory stores for rate limiting and attempts
const otpRequestTimes = new Map(); // { identifier: [timestamps] }
const otpAttempts = new Map(); // { identifier: { attempts: number, blockedUntil: Date } }

const generateOtp = async (identifier, mobileNumber, sendOtpSMS) => {
  // Check if blocked
  const attemptData = otpAttempts.get(identifier);
  const now = Date.now();
  if (attemptData && attemptData.blockedUntil > now) {
    throw new Error('User is blocked due to multiple failed attempts. Try again later.');
  }

  // Rate limiting
  const windowStart = now - OTP_EXPIRY_MINUTES * 60 * 1000;
  const requests = otpRequestTimes.get(identifier) || [];
  const recentRequests = requests.filter(t => t > windowStart);
  if (recentRequests.length >= 5) {
    throw new Error(`Exceeded OTP request limit. Please try again after ${OTP_EXPIRY_MINUTES} minutes.`);
  }
  recentRequests.push(now);
  otpRequestTimes.set(identifier, recentRequests);

  // Generate OTP
  const otp = crypto.randomInt(100000, 1000000).toString();
  const otpHash = await hashOtp(otp);

  // Remove existing OTP
  await Otp.deleteMany({ identifier });

  // Save new OTP
  const otpDoc = new Otp({ identifier, otpHash });
  await otpDoc.save();

  // Send SMS
  await sendOtpSMS(mobileNumber, otp);

  return { message: 'OTP sent successfully' };
};

const verifyOtp = async (identifier, otp) => {
  console.log(`Verifying OTP for identifier: ${identifier} with OTP: ${otp}`);
  const attemptData = otpAttempts.get(identifier);
  const now = Date.now();
  if (attemptData && attemptData.blockedUntil > now) {
    console.log('User is blocked due to multiple failed attempts.');
    throw new Error('User is blocked due to multiple failed attempts. Try again later.');
  }

  const otpDoc = await Otp.findOne({ identifier });
  if (!otpDoc) {
    console.log('OTP not found or expired in DB');
    // Increment attempts
    const currentAttempts = attemptData ? attemptData.attempts : 0;
    if (currentAttempts >= MAX_OTP_ATTEMPTS - 1) {
      otpAttempts.set(identifier, { attempts: 0, blockedUntil: now + BLOCK_DURATION_MS });
      throw new Error('Too many failed attempts. User blocked for 1 hour.');
    }
    otpAttempts.set(identifier, { attempts: currentAttempts + 1, blockedUntil: attemptData ? attemptData.blockedUntil : 0 });
    throw new Error('OTP not found or expired');
  }

  const isMatch = await compareOtp(otp, otpDoc.otpHash);
  if (!isMatch) {
    console.log('OTP does not match');
    // Increment attempts
    const currentAttempts = attemptData ? attemptData.attempts : 0;
    if (currentAttempts >= MAX_OTP_ATTEMPTS - 1) {
      otpAttempts.set(identifier, { attempts: 0, blockedUntil: now + BLOCK_DURATION_MS });
      throw new Error('Too many failed attempts. User blocked for 1 hour.');
    }
    otpAttempts.set(identifier, { attempts: currentAttempts + 1, blockedUntil: attemptData ? attemptData.blockedUntil : 0 });
    throw new Error('Invalid OTP');
  }

  console.log('OTP verified successfully');
  // Success: reset attempts, delete OTP
  otpAttempts.delete(identifier);
  await Otp.deleteOne({ _id: otpDoc._id });

  return { message: 'OTP verified successfully' };
};

module.exports = {
  generateOtp,
  verifyOtp,
};
