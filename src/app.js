const express = require('express');
const path = require("path");
const pug = require("pug");

const app = express();
const {addNewVisitor, createTable} = require("./db");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/new_visitor', express.static('public'));

app.set('view engine', 'pug')
// app.set('./views', path.join(__dirname, './views'))

app.get('/', function (req,res){
   res.render('index')
})

app.get('/new_visitor', function (req, res) {
   res.sendFile(path.join(__dirname + "/index.html" ));
});


app.post('/new_visitor', async function (req, res) {

  let vname=req.body.vname;
  let aname=req.body.aname;
  let  age=req.body.age;
  let date=req.body.date;
  let time=req.body.time;
  let comments=req.body.comments;

  createTable();
   const visitor =await addNewVisitor(vname,aname,age,date,time,comments);

     return res.render("index", { data: visitor[1] });
})

const server = app.listen(8081, function () {
   const host = server.address().address
   const port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

module.exports = server;