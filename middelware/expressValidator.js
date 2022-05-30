const { body, validationResult } = require('express-validator');
exports.registerValidation=[
    body('name','please enter a correct name'),
    body('email','please write a correct email').isEmail(),
    body('password','please enter a correct password').isLength({
        min:8
    }),
];

exports.loginValidation=[
    body('email','please write a correct email').isEmail(),
    body('password','please enter a correct password').isLength({
        min:8
    }),
];

exports.validation=(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}
