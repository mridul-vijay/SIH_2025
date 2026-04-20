const mongoose = require('mongoose');
const { getAadharConnection } = require('../config/db');

const aadharSchema = new mongoose.Schema({
  aadhaar: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        return /^\d{12}$/.test(v);
      },
      message: 'Aadhaar number must be exactly 12 digits'
    }
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^\d{10}$/.test(v);
      },
      message: 'Phone number must be exactly 10 digits'
    }
  },
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
  }
});

const Aadhar = getAadharConnection().model('Aadhar', aadharSchema);

module.exports = Aadhar ;
