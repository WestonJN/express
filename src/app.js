var express = require('express');
var path = require("path");

var app = express();

var bodyParser = require('body-parser');
var {addNewVisitor, createTable} = require("./db");

var pug = require("pug")

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/new_visitor', function (req, res) {
   res.sendFile(path.join(__dirname + "/index.html" ));
})

app.post('/response', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   // if (req.body)
   //    throw new Error('The requested body cannot be empty')

   //    res.render("index", {
   //       vname:req.body.vname
   //    });
   response = {
      vname:req.body.vname,
      aname:req.body.aname,
      age:req.body.age,
      date:req.body.date,
      time:req.body.time,
      comments:req.body.comments
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})