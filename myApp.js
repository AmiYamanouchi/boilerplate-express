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
const absolutePath = __dirname + "/views/index.html"
app.get('/', (req, res, next) => {
    res.sendFile(absolutePath)
})



























 module.exports = app;
