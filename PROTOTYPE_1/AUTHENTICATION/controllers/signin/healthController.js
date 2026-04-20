const jwt = require('jsonwebtoken');
const User = require('../../models/userModel');
const { generateOtp, verifyOtp } = require('../../utils/otp');
const { sendOtpSMS } = require('../../config/twilio');

const generateHealthSigninOtp = async (req, res, next) => {
  try {
    const { healthId } = req.body;

    // Check if user exists
    const user = await User.findOne({ healthId });
    if (!user) {
      return res.status(404).json({ error: true, message: 'User not found' });
    }

    const result = await generateOtp(healthId, user.mobileNumber, sendOtpSMS);
    res.json(result);
  } catch (err) {
    if (err.message.includes('blocked') || err.message.includes('limit')) {
      return res.status(429).json({ error: true, message: err.message });
    }
    next(err);
  }
};

const verifyHealthSigninOtp = async (req, res, next) => {
  try {
    const { healthId, otp } = req.body;

    await verifyOtp(healthId, otp);

    // Find user
    const user = await User.findOne({ healthId });
    if (!user) {
      return res.status(404).json({ error: true, message: 'User not found' });
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user._id, mobileNumber: user.mobileNumber, healthId: user.healthId },
      process.env.JWT_SECRET || 'fallback',
      { expiresIn: '1h' }
    );

    res.json({
      message: 'Signin successful',
      token,
      user: { name: user.name, mobileNumber: user.mobileNumber, healthId: user.healthId },
    });
  } catch (err) {
    if (err.message.includes('blocked') || err.message.includes('Invalid') || err.message.includes('not found')) {
      return res.status(400).json({ error: true, message: err.message });
    }
    next(err);
  }
};

module.exports = {
  generateHealthSigninOtp,
  verifyHealthSigninOtp,
};
