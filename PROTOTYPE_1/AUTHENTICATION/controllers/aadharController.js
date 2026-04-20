import crypto from 'crypto';
import Otp from '../models/otpModel.js';
import Aadhar from '../models/aadharModel.js';
import User from '../models/userModel.js';
import { hashOtp, compareOtp } from '../utils/hash.js';
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);
 
const generateHealthId = (aadhaar) => {
  const last4Aadhaar = aadhaar.slice(-4);
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let random4 = '';
  for (let i = 0; i < 4; i++) {
    random4 += chars[crypto.randomInt(0, 36)];
  }
  return `AKMH-${last4Aadhaar}-${random4}`;
};


const generateOtp = async (req, res, next) => {
  try {
    const { aadhaar } = req.body;
    console.log(aadhaar)
    console.log('TWILIO_VERIFY_SERVICE_SID:', `"${process.env.TWILIO_VERIFY_SERVICE_SID}"`);

    // Check AadharDB for aadhaar number
    const aadharRecord = await Aadhar.findOne({ aadhaar: aadhaar });
    if (!aadharRecord) {
      return res.status(404).json({
        error: true,
        message: 'Aadhaar number not found.',
      });
    }

    // Use Twilio Verify service for OTP
    const phoneNumber = aadharRecord.phone;
    const formattedPhoneNumber = phoneNumber.startsWith('+') ? phoneNumber : '+91' + phoneNumber;

    const verification = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SERVICE_SID)
      .verifications.create({ to: formattedPhoneNumber, channel: 'sms' });

    console.log('Twilio verification response:', verification);

    res.json({ success: true, sid: verification.sid, status: verification.status });
  } catch (err) {
    console.error('Error in generateOtp:', err);
    if (err.message.includes('blocked') || err.message.includes('limit')) {
      return res.status(429).json({ error: true, message: err.message });
    }
    next(err);
  }
};

const verifyOtp = async (req, res, next) => {
  try {
    const { aadhaar, otp } = req.body;
    console.log('Received OTP:', otp);

    // Use Twilio Verify service to check OTP
    const aadharRecord = await Aadhar.findOne({ aadhaar: aadhaar });
    if (!aadharRecord) {
      return res.status(404).json({
        error: true,
        message: 'Aadhaar record not found.',
      });
    }

    const phoneNumber = aadharRecord.phone;
    const formattedPhoneNumber = phoneNumber.startsWith('+') ? phoneNumber : '+91' + phoneNumber;

    console.log('Using TWILIO_VERIFY_SERVICE_SID for verificationCheck:', `"${process.env.TWILIO_VERIFY_SERVICE_SID}"`);

    const verificationCheck = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SERVICE_SID)
      .verificationChecks.create({ to: formattedPhoneNumber, code: otp });

    console.log('Twilio verificationCheck response: Hello', verificationCheck);

    if (verificationCheck.status !== 'approved') {
      return res.status(400).json({ error: true, message: 'Invalid OTP' });
    }

    // Log address and dob for debugging
    console.log('Aadhar record address:', aadharRecord.address);
    console.log('Type of address:', typeof aadharRecord.address);
    console.log('Aadhar record dob:', aadharRecord.dob);

    // Check if required fields are present and valid in aadharRecord
    if (!aadharRecord.address || (typeof aadharRecord.address === 'object' && Object.keys(aadharRecord.address).length === 0)) {
      return res.status(400).json({
        error: true,
        message: 'User validation failed: address is required and cannot be empty in Aadhaar record.',
      });
    }

    if (!aadharRecord.dob || isNaN(new Date(aadharRecord.dob).getTime())) {
      return res.status(400).json({
        error: true,
        message: 'User validation failed: dob is required and must be a valid date in Aadhaar record.',
      });
    }

    // Convert address object to string if needed
    let addressString = '';
    if (typeof aadharRecord.address === 'object' && aadharRecord.address !== null) {
      // Convert object to string (customize as needed)
      addressString = JSON.stringify(aadharRecord.address);
    } else if (typeof aadharRecord.address === 'string') {
      addressString = aadharRecord.address;
    } else {
      return res.status(400).json({
        error: true,
        message: 'User validation failed: address must be a string or object.',
      });
    }

    const userData = {
      name: aadharRecord.name,
      address: addressString,
      gender: aadharRecord.gender,
      dob: aadharRecord.dob,
      mobileNumber: aadharRecord.phone,
    };

    const user = new User(userData);
    await user.save();

    // Generate and store Health ID
    user.healthId = generateHealthId(aadhaar);
    await user.save();

    res.json({ message: 'OTP verified successfully and user data stored.' });
  } catch (err) {
    console.error('Error in verifyOtp:', err);
    if (err.message.includes('blocked') || err.message.includes('Invalid') || err.message.includes('not found')) {
      return res.status(400).json({ error: true, message: err.message });
    }
    next(err);
  }
};

export {
  generateOtp,
  verifyOtp,
};
