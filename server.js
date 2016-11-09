var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
  counter =  counter + 1;
  res.send(counter.toString());
});

var names = [];
app.get('/submit-name', function (req, res) { // URL:/ submit-name?name=xxxx
    //get the name from the request
    var name= req.query.name; //todo
    
  names.push(name);
    //JSON Javascript object notation
    res.send(JSON.stringify(names));
});
    
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/copy.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'copy.jpg'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/index.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/slide3.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'slide3.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
