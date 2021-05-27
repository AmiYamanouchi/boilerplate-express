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
//     res.sendFile(absolutePath);
//   });

// #4
// const assetPath = path.join(__dirname, "public");
// app.use(express.static(assetPath));

var absolutePath = __dirname + "/views/index.html"
console.log(absolutePath);


app.get('/', (req, res, next) => {
  // res.send("Hello Express")
  res.sendFile(absolutePath)
})




























 module.exports = app;
