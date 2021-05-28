var express = require('express');
var app = express();
const path = require("path");
const bodyParser = require('body-parser')

const dotenv = require("dotenv");
dotenv.config();

// #7
app.use(function(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

// #11 
app.use(bodyParser.urlencoded({ extended: false }));

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
//heroku env 
// const upper = process.env.MESSAGE_STYLE === "uppercase";
// const messageFilter = upper ? x => x.toUpperCase() : x => x;
// app.get("/json", function(req, res) {
//     res.json({
//         message: messageFilter("Hello json")
//     });
// });

const response = ()=>{
    let resp = " "
  if (process.env.MESSAGE_STYLE === 'uppercase'){
   return resp = "HELLO JSON";
  }else{
    return resp = "Hello json";
  }
}

// #8
app.get(
    "/now",
    function(req, res, next) {
        req.time = new Date().toString();
        next();
    },
    function(req, res) {
        res.send({
            time: req.time
        });
    }
);

// #9
app.get("/:word/echo", function(req, res) {
    const word = req.params.word;
    res.json({
        echo: word
    });
});

// #10
app.get("/name", function(req, res) {
    const first = req.query.first;
    const last = req.query.last;
    res.json({
        name: `${first} ${last}`
    })
});

// #12

app.post("/name", function(req, res) {
    const first = req.body.first;
    const last = req.body.last;
    res.json({
        name: `${first} ${last}`
    })
});

















 module.exports = app;
