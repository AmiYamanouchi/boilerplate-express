var express = require('express');
var app = express();

// #1
// console.log("Hello World")

// #2
// app.get("/", (req, res) => {
//     res.send("Hello Express");
//   });

// #3
//   app.get("/", function(req, res) {
//     res.sendFile(__dirname + "/views/index.html");
//   });

// #4
const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));




























 module.exports = app;
