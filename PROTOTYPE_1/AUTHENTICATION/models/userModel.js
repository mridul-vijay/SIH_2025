const mongoose = require('mongoose');
const { getUsersConnection } = require('../config/db');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Other']
  },
  dob: {
    type: Date,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        return /^\d{10}$/.test(v);
      },
      message: 'Mobile number must be exactly 10 digits'
    }
  },
  healthId: {
    type: String,
    unique: true,
    sparse: true // Allow null initially
  }
});

const User = getUsersConnection().model('User', userSchema);

module.exports = User;
