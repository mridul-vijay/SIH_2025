const mongoose = require('mongoose');
const { getTcmcConnection } = require('../config/db');

const tcmcSchema = new mongoose.Schema({
  tcmcNumber: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        return /^\d{4,6}$/.test(v);
      },
      message: 'TCMC number must be 4 to 6 digits'
    }
  },
  mobileNumber: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^\d{10}$/.test(v);
      },
      message: 'Mobile number must be exactly 10 digits'
    }
  },
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
  }
});

const Tcmc = getTcmcConnection().model('Tcmc', tcmcSchema);

module.exports = Tcmc;
