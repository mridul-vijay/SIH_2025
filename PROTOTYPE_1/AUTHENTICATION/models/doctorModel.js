const mongoose = require('mongoose');
const { getDoctorsConnection } = require('../config/db');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  collegeDetails: {
    type: String,
    required: true
  },
  degree: {
    type: String,
    required: true
  },
  experience: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Other']
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
  doctorId: {
    type: String,
    unique: true,
    sparse: true // Allow null initially
  }
});

const Doctor = getDoctorsConnection().model('Doctor', doctorSchema);

module.exports = Doctor;
