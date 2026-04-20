const User = require('../../models/userModel'); // Corrected path to User model
const otpService = require('../../services/otpService'); // Hypothetical service to send OTP

// Example generateSigninOtp function
async function generateSigninOtp(req, res) {
  try {
    const { mobileNumber } = req.body;

    console.log('Received mobile number:', mobileNumber);

    if (!mobileNumber) {
      console.log('Mobile number missing in request');
      return res.status(400).json({ error: 'Mobile number is required' });
    }

    // Check if mobile number exists in the database
    const user = await User.findOne({ mobileNumber: mobileNumber });
    if (!user) {
      console.log('Mobile number not found in database:', mobileNumber);
      return res.status(404).json({ error: 'Mobile number not registered' });
    }

    // Generate OTP (you can customize this logic)
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log('Generated OTP:', otp);

    // Send OTP using your OTP service
    const otpSent = await otpService.sendOtp(mobileNumber, otp);
    if (!otpSent) {
      console.log('Failed to send OTP to:', mobileNumber);
      return res.status(500).json({ error: 'Error sending OTP. Please try again.' });
    }

    // Optionally save OTP and expiry in DB or cache for verification later
    // await saveOtpForUser(user.id, otp);

    console.log('OTP sent successfully to:', mobileNumber);
    return res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error in generateSigninOtp:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function verifySigninOtp(req, res) {
  // Stub implementation for OTP verification
  res.status(200).json({ message: 'OTP verified successfully' });
}

module.exports = {
  generateSigninOtp,
  verifySigninOtp,
};
