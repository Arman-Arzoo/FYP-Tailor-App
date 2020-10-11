const jwt = require ("jsonwebtoken");

const auth = (req,res,next)=>{

    try{
        const token = req.header("x-auth-token");

        if(!token){
            return res.status(401).json({msg:"No authentication token, authorization denied"})
        }
        const JWT_SECRET = "djfdjfkldjsfldjsflkjdfjdslfjdfj"
        const verified = jwt.verify(token,JWT_SECRET);

        if(!verified){
            return res.status(401).json({msg:"token verification failed,authorization denied"});

        }

        req.user = verified.id;
        next()

    }catch(err){

    }

}


module.exports = auth;