const { body, validationResult } = require('express-validator');

const loginValidationRules = () => {
    return [
        body('email').isEmail().withMessage('Enter a valid email address'),
        body('password').notEmpty().withMessage('Password cannot be empty')
    ];
};

const signupValidationRules = () => {
    return [
        body('name').notEmpty().withMessage('Name cannot be empty'),
        body('email').isEmail().withMessage('Enter a valid email address'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
    ];
};

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    loginValidationRules,
    signupValidationRules,
    validate
};
