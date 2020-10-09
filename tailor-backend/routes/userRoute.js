const router = require('express').Router();


router.post("/register", async (req, res) => {

    const { email, password, passwordCheck, displayName } = req.body;

    if (!email || !password || !passwordCheck) {

        return res.status(400).json({msg:"not all feild have been entered"});

    }

});
module.exports = router



