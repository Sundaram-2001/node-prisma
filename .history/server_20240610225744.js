const express=require("express");
const bodyParser = require("body-parser");
const app=express();
const {getAll}=require(./db.js)
app.get("/",(req,res)=>{
    // console.log("Test Route");
    res.send("Test Route")
})
app.listen(3000,(req,res)=>{
    console.log("Server started on 3000..");
})