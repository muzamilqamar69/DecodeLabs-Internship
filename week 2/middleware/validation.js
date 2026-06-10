const { body, param, validationResult } = require('express-validator');

const userValidationRules = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2 })
    .withMessage('Name must contain at least 2 characters'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('A valid email address is required')
    .normalizeEmail(),
  body('age')
    .notEmpty()
    .withMessage('Age is required')
    .isInt({ gt: 0 })
    .withMessage('Age must be a positive integer')
    .toInt()
];

const idParamValidationRules = [
  param('id')
    .trim()
    .notEmpty()
    .withMessage('User ID is required')
    .isUUID()
    .withMessage('User ID must be a valid UUID')
];

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map((error) => ({ field: error.param, message: error.msg }))
    });
  }
  next();
};

module.exports = {
  userValidationRules,
  idParamValidationRules,
  validateRequest
};
