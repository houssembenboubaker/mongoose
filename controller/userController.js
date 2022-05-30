const userSchema = require("../model/userSchema");
const bcrypt=require('bcrypt');
const jwt =require('jsonwebtoken');
//register
exports.register=async(req,res)=>{
    const {email,password}= req.body
try {
    const found=await userSchema.findOne({email})
    if (found) {
       return res.status(400).send({msg:'user already exist'})
    }
    const newUser = new userSchema(req.body)
    //bcrypt
    const salt=10
    const hachPassword=bcrypt.hashSync(password,salt)
    newUser.password=hachPassword
    //jwt
    const payload={id:newUser._id}
    const token = jwt.sign(payload , process.env.secretOrkey);

    await newUser.save()
    res.status(200).send({msg:'registred with success',newUser,token})
} catch (error) {
    res.status(500).send({msg:'could not register'})
}
}

exports.login=async(req,res)=>{
    const {email,password}= req.body;
try {
    const foundUSer = await userSchema.findOne({email});
    if (!foundUSer) {
       return res.status(400).send('bad credential');
    }
    const match=await bcrypt.compare(password,foundUSer.password);
    if (!match) {
        return res.status(400).send('bad credential');
    }
    res.status(200).send({msg:'connected with success',foundUSer});
} catch (error) {
    res.status(500).send('could not login');
}
}
