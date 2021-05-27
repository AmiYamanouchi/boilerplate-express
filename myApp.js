var express = require('express');
var app = express();
const path = require("path");


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

// #4
// use express -> npm i  
const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));




























 module.exports = app;
