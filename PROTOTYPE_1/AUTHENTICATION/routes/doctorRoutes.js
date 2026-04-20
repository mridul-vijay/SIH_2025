const express = require('express');
const { generateOtpForDoctor, verifyOtpForDoctor } = require('../controllers/doctorController');
const { validateGenerateTcmcOtp, validateVerifyTcmcOtp } = require('../middlewares/validation');

const router = express.Router();

router.post('/generate-otp', validateGenerateTcmcOtp, generateOtpForDoctor);
router.post('/verify-otp', validateVerifyTcmcOtp, verifyOtpForDoctor);

module.exports = router;
