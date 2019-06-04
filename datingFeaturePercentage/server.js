var express = require('express');

var data = [];

console.log('Server is running! port:', 8000);

app.use(express.static('static'));

express()
    .get('/', test)
    .get('/config', config)
    .get('/home', home)
    .use(notFound)
    .listen(8000);

function test(req, res) {
    var doc = '<!doctype html>';
    doc += '<title>My website</title>';
    doc += '<h1>Is working!</h1>';
    res.send(doc);
}

function config(req, res) {
	var page = express.static('static',[config.html]);
	res.send(page);
}


function home(req, res) {
    var doc = '<!doctype html>';
    doc += '<title>Homepage</title>';
    doc += '<h1>wip</h1>';
    res.send(doc);
}

function notFound(req, res) {
    var doc = '<!doctype html>';
    doc += '<title>Not found</title>';
    doc += '<h1>Page was not found</h1>';
    doc += '<p>Uh oh! We couldn’t find this page!</p>';
    res.status(404).send(doc);
}