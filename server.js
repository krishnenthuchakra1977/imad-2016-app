var express = require('express');
var morgan = require('morgan');
var path = require('path');


var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/about.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'about.html'));
});

app.get('/single.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'single.html'));
});

app.get('/trainers.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'trainers.html'));
});

app.get('/ui/404.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '404.html'));
});

app.get('/ui/blog.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blog.html'));
});

app.get('/ui/contact.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'contact.html'));
});

app.get('/ui/trainers.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'trainer.html'));
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



app.get('/ui/slide3.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'slide3.png'));
});

app.get('/ui/bootstrap.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap.css'));
});

app.get('/ui/ab.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'ab.jpg'));
});

app.get('/ui/arrow.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'arrow.png'));
});

app.get('/ui/arrows.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'arrows.png'));
});

app.get('/ui/b1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'b1.jpg'));
});

app.get('/ui/b2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'b2.jpg'));
});

app.get('/ui/b3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'b3.jpg'));
});

app.get('/ui/banner-two.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'banner-two.jpg'));
});

app.get('/ui/banner.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'banner.jpg'));
});

app.get('/ui/blog1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blog1.jpg'));
});

app.get('/ui/blog2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blog2.jpg'));
});

app.get('/ui/blog3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blog3.jpg'));
});

app.get('/ui/c1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'c1.jpg'));
});

app.get('/ui/c2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'c2.jpg'));
});

app.get('/ui/c3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'c3.jpg'));
});

app.get('/ui/co.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'co.png'));
});

app.get('/ui/img_spt.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'img_spt.png'));
});

app.get('/ui/menu-icon.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'menu-icon.jpg'));
});

app.get('/ui/move-top.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'move-top.png'));
});

app.get('/ui/n1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'j1.jpg'));
});

app.get('/ui/n2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'j2.jpg'));
});

app.get('/ui/n3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'j3.jpg'));
});

app.get('/ui/read.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'read.png'));
});

app.get('/ui/slide2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'slide2.jpg'));
});

app.get('/ui/slide3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'slide3.jpg'));
});

app.get('/ui/slide4.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'slide4.jpg'));
});

app.get('/ui/t1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 't1.jpg'));
});

app.get('/ui/t2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 't2.jpg'));
});

app.get('/ui/t3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 't3.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
