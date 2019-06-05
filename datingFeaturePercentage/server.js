var express = require('express');
var app = express();

var data = [];

console.log('Server is running! port:', 8000);

app
	.use(express.static('static'))
	.get('/', config)
    .use('/home', home)
    .use(notFound)
	.set('view engine', 'ejs')
	.set('views', 'views')
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