const express = require('express');
const { generateSigninOtp, verifySigninOtp } = require('../controllers/signin/mobileController');
const { generateHealthSigninOtp, verifyHealthSigninOtp } = require('../controllers/signin/healthController');
const { validateSigninGenerateOtp, validateSigninVerifyOtp, validateHealthGenerateOtp, validateHealthVerifyOtp } = require('../middlewares/validation');

const router = express.Router();

router.post('/generate-otp', validateSigninGenerateOtp, generateSigninOtp);
router.post('/verify-otp', validateSigninVerifyOtp, verifySigninOtp);

router.post('/health/generate-otp', validateHealthGenerateOtp, generateHealthSigninOtp);
router.post('/health/verify-otp', validateHealthVerifyOtp, verifyHealthSigninOtp);

module.exports = router;
