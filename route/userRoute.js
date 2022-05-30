const express=require('express');
const { register, login } = require('../controller/userController');
const { registerValidation, validation, loginValidation } = require('../middelware/expressValidator');
const userRouter=express.Router();

userRouter.post('/register',registerValidation,validation,register);
userRouter.post('/login',loginValidation,validation,login);
module.exports=userRouter