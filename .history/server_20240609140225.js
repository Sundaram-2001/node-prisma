const express=require("express");
const bodyParser = require("body-parser");
const app=express();
app.get("/",(req,res))
app.listen(3000,(req,res)=>{
    console.log("Server started on 3000..");
})