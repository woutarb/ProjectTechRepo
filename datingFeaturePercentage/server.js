var express = require('express');
var path = require('path');
var app = express();



console.log('Server is running! port:', 8000);

app
	.use(express.static('static'))
	.set('view engine', 'ejs')
	.set('views', 'views')
	.get('/',config)
	.get('/home',home)
    .use(notFound)
    .listen(8000);

function config(req,res){
	res.render('config');
}

function home(req,res){
	res.render('index');
}

function notFound(req, res) {
    var doc = '<!doctype html>';
    doc += '<title>Not found</title>';
    doc += '<h1>Page was not found</h1>';
    doc += '<p>Uh oh! We couldn’t find this page!</p>';
    res.status(404).send(doc);
}

