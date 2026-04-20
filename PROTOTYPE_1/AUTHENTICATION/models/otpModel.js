const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const otpSchema = new mongoose.Schema({
  identifier: {
    type: String,
    required: true,
    index: true,
  },
  otpHash: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300, // TTL index - document expires after 5 minutes
  },
});

// Method to compare hashed OTP
otpSchema.methods.compareOtp = async function (plainOtp) {
  return bcrypt.compare(plainOtp, this.otpHash);
};

const Otp = mongoose.model('Otp', otpSchema);

module.exports = Otp;
