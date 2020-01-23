var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);



app.get('/', function(req, res) {
    res.render('index_page');
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/news/', function(req, res) {
    res.render('news', {newsId: req.params.id, newParam:283});
});

app.get('/news/:id', function(req,res) {
    res.render('news', {newsId: req.params.id});
});

app.listen(3000);