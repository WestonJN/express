var express = require('express');
var path = require("path");

var app = express();

var bodyParser = require('body-parser');
var {addNewVisitor, createTable} = require("./db");

var pug = require("pug")

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static('public'));

app.set('view engine', 'pug')
app.set('./view', path.join(__dirname, './view'))

app.get('/new_visitor', function (req, res) {
   res.sendFile(path.join(__dirname + "/index.html" ));
})

app.post('/thank_you', function (req, res) {

   if (req.body)
      throw new Error('The requested body cannot be empty')

      res.render("index", {
         vname:req.body.vname
      });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

module.exports = server;