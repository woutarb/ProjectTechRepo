var express = require('express');

var data = [];

console.log('Server is running! port:', 8000);


express()
	.use(express.static('static'))
    .use(notFound)
    .listen(8000);

function notFound(req, res) {
    var doc = '<!doctype html>';
    doc += '<title>Not found</title>';
    doc += '<h1>Page was not found</h1>';
    doc += '<p>Uh oh! We couldn’t find this page!</p>';
    res.status(404).send(doc);
}