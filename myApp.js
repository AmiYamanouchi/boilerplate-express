var express = require('express');
var app = express();
const path = require("path");
const bodyParser = require('body-parser')

const dotenv = require("dotenv");
dotenv.config();

// #4
// use express -> npm i  
const assetPath = path.join(__dirname, "/");
console.log(assetPath);
app.use(express.static(assetPath));

// #1
// console.log("Hello World")

// #2
// app.get("/", (req, res) => {
//     res.send("Hello Express");
//   });

// #3
const absolutePath = path.join(__dirname, "views", "index.html");
  app.get("/", function(req, res) {
    res.sendFile(absolutePath);
  });


// #5
app.get('/json',(req, res)=> res.json({"message": response()}))


// #6
const response = ()=>{
    let resp = " "
  if (process.env.MESSAGE_STYLE === 'uppercase'){
   return resp = "Hello json".toUpperCase();
  }else{
    return resp = "Hello json";
  }
  }
























 module.exports = app;
