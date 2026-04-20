const express = require('express');
const { generateOtp, verifyOtp } = require('../controllers/aadharController');
const { validateGenerateOtp, validateVerifyOtp } = require('../middlewares/validation');

const router = express.Router();

router.post('/generate-otp', validateGenerateOtp, generateOtp);
router.post('/verify-otp', validateVerifyOtp, verifyOtp);

module.exports = router;
