const express = require ("express");
const mongoose = require ("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

// set up server
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000

app.get("/", (req,res)=>{
    res.send("hello world")

})


app.listen(PORT,()=>{console.log("Server Started at http://localhost:3000")});



module.exports = app