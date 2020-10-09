const router = require('express').Router();


router.get('/test', (req,res)=>{
    res.send ("hello it working");
})

module.exports = router



