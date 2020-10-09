const router = require('express').Router();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");


router.post("/register", async (req, res) => {

    try{

    

    let { email, password, passwordCheck, displayName } = req.body;

    if (!email || !password || !passwordCheck) {

        return res.status(400).json({msg:"not all feild have been entered"});

    }

    if(password.length < 5){

        return res.status(400).json({msg:"password should be 5 character or more"});
    }

    if(password !=passwordCheck){

        return res.status(400).json({msg:"password does not matched"});
    }

    const existingUser = await User.findOne({email:email});

    if(existingUser){
        return res.status(400).json({msg:"already have and account"});
    }
    
    if(!displayName){
        displayName = email
    }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password,salt);

//store user

const newUser = new User({
    email,
    password:passwordHash,
    displayName

});

const savedUser = await newUser.save();
res.json(savedUser);





}catch(err){
    res.status(500).json({error:err.message})
}

});
module.exports = router



