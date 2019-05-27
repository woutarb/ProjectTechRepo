var express = require('express');

var data = [];

console.log('Server is running! port:', 8000);

express()
    .get('/', test)
    .get('/about', about)
    .get('/login', login)
    .use(notFound)
    .listen(8000);

function test(req, res) {
    var doc = '<!doctype html>';

    doc += '<title>My website</title>';
    doc += '<h1>Is working!</h1>';

    res.send(doc);

}

function about(req, res) {
    var doc = '<!doctype html>';

    doc += '<title>Over OKBier</title>';
    doc += '<h1>OKBier</h1>';

    res.send(doc);
}

function login(req, res) {
    var doc = '<!doctype html>';

    doc += '<title>Login</title>';
    doc += '<h1>wip</h1>';

    res.send(doc);
}

function notFound(req, res) {
    var doc = '<!doctype html>';

    doc += '<title>Not found</title>';
    doc += '<h1>Not found</h1>';
    doc += '<p>Uh oh! We couldn’t find this page!</p>';

    res.status(404).send(doc);
}
