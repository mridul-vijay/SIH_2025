const { body, validationResult } = require('express-validator');

const validateGenerateOtp = [
  body('aadhaar')
    .exists().withMessage('aadhaar is required')
    .isLength({ min: 12, max: 12 }).withMessage('aadhaar must be exactly 12 digits')
    .isNumeric().withMessage('aadhaar must contain only digits'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: true, errors: errors.array() });
    }
    next();
  },
];

const validateVerifyOtp = [
  body('aadhaar')
    .exists().withMessage('aadhaar is required')
    .isLength({ min: 12, max: 12 }).withMessage('aadhaar must be exactly 12 digits')
    .isNumeric().withMessage('aadhaar must contain only digits'),
  body('otp')
    .exists().withMessage('otp is required')
    .isLength({ min: 8, max: 8 }).withMessage('otp must be exactly 8 digits')
    .isNumeric().withMessage('otp must contain only digits'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: true, errors: errors.array() });
    }
    next();
  },
];

const validateSigninGenerateOtp = [
  body('mobileNumber')
    .exists().withMessage('mobileNumber is required')
    .isLength({ min: 10, max: 10 }).withMessage('mobileNumber must be exactly 10 digits')
    .isNumeric().withMessage('mobileNumber must contain only digits'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: true, errors: errors.array() });
    }
    next();
  },
];

const validateSigninVerifyOtp = [
  body('mobileNumber')
    .exists().withMessage('mobileNumber is required')
    .isLength({ min: 10, max: 10 }).withMessage('mobileNumber must be exactly 10 digits')
    .isNumeric().withMessage('mobileNumber must contain only digits'),
  body('otp')
    .exists().withMessage('otp is required')
    .isLength({ min: 6, max: 6 }).withMessage('otp must be exactly 6 digits')
    .isNumeric().withMessage('otp must contain only digits'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: true, errors: errors.array() });
    }
    next();
  },
];

const validateHealthGenerateOtp = [
  body('healthId')
    .exists().withMessage('healthId is required')
    .matches(/^AKMH-\d{4}-[A-Z0-9]{4}$/).withMessage('Invalid Health ID format. Must be AKMH-XXXX-YYYY where X are digits and Y are uppercase alphanumeric.'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: true, errors: errors.array() });
    }
    next();
  },
];

const validateHealthVerifyOtp = [
  body('healthId')
    .exists().withMessage('healthId is required')
    .matches(/^AKMH-\d{4}-[A-Z0-9]{4}$/).withMessage('Invalid Health ID format. Must be AKMH-XXXX-YYYY where X are digits and Y are uppercase alphanumeric.'),
  body('otp')
    .exists().withMessage('otp is required')
    .isLength({ min: 6, max: 6 }).withMessage('otp must be exactly 6 digits')
    .isNumeric().withMessage('otp must contain only digits'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: true, errors: errors.array() });
    }
    next();
  },
];

const validateGenerateTcmcOtp = [
  body('tcmc')
    .exists().withMessage('tcmc is required')
    .isLength({ min: 4, max: 6 }).withMessage('tcmc must be 4 to 6 digits')
    .isNumeric().withMessage('tcmc must contain only digits'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: true, errors: errors.array() });
    }
    next();
  },
];

const validateVerifyTcmcOtp = [
  body('tcmc')
    .exists().withMessage('tcmc is required')
    .isLength({ min: 4, max: 6 }).withMessage('tcmc must be 4 to 6 digits')
    .isNumeric().withMessage('tcmc must contain only digits'),
  body('otp')
    .exists().withMessage('otp is required')
    .isLength({ min: 6, max: 6 }).withMessage('otp must be exactly 6 digits')
    .isNumeric().withMessage('otp must contain only digits'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: true, errors: errors.array() });
    }
    next();
  },
];

module.exports = {
  validateGenerateOtp,
  validateVerifyOtp,
  validateSigninGenerateOtp,
  validateSigninVerifyOtp,
  validateHealthGenerateOtp,
  validateHealthVerifyOtp,
  validateGenerateTcmcOtp,
  validateVerifyTcmcOtp,
};
