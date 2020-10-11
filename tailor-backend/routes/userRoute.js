const router = require('express').Router();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv =require("dotenv");
const auth = require("../middleWare/auth");

dotenv.config();


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





}
catch(err){
    res.status(500).json({error:err.message})
}


});


//login validation


router.post("/login",async(req,res)=>{

    try{

    const {email,password}=req.body;

    if(!email || !password){

        return res.status(400).json({msg:"Not all field empty"});

    }

    const user = await User.findOne({email:email});

    if(!user){
        return res.status(400).json({msg:"No account with such email"});
    }

    const isMatch = await bcrypt.compare(password,user.password);

    if(!isMatch){
        return res.status(400).json({msg:"invalid user credentials"});
    }

    let JWT_SECRET = "djfdjfkldjsfldjsflkjdfjdslfjdfj"
    
    const token = jwt.sign({id:user._id},JWT_SECRET);

    res.json({
        token,
        user:{
            id:user._id,
            displayName:user.displayName,
            email:user.email
        }
    });

}catch(err){
    res.status(500).json({error:err.message})

}

});


// Delete account router

router.delete("/deleteIt",auth,async(req,res)=>{

    try{
        const deleteUser = await User.findByIdAndDelete(req.user);

        res.json(deleteUser)


    } catch(err){
        res.status(500).json({error:err.message})

    }

});


router.post("/tokenIsValid",async(req,res)=>{

    try{
        const token = req.header("x-auth-token");

        if(!token){
            return res.json(false)
        }
        let JWT_SECRET = "djfdjfkldjsfldjsflkjdfjdslfjdfj"
        const verified = jwt.verify(token,JWT_SECRET);

        if(!verified){
            return res.json(false)
        }
    
        const user = await User.findById(verified.id)
        if(!user){
            return res.json(false)
        }
        else{
            return res.json(true)
        }


    }catch(err){

    }

});


module.exports = router



