/*
Author: Emily Stockenbojer
Date: 3/18/18
Description: Render different pages of the website
*/

var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({
  defaultLayout: 'main'
});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 5000);

const path = require('path');
app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res) {
  res.render('home')
});

app.get('/about', function(req, res) {
  res.render('about')
});

app.get('/menu', function(req, res) {
  res.render('menu')
});

app.get('/contact', function(req, res) {
  res.render('contact')
});

app.use(function(req, res) {
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
