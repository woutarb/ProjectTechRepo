// importing depencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

console.log('Server is running! port:', 8000);

var indexRoute = require('./routes/index');

// assigning express dependencies
app
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({extended: false}))
	.use(express.json())
	.use(express.urlencoded({extended: false}));


app
	.use(express.static('static'))
	.set('view engine', 'ejs')
	.set('views', 'views')
// assigning the routes
	.use('/', indexRoute)
//Error handeling
    .use(notFound)
    .listen(8000);




//error handeling, when the page is not found
function notFound(req, res) {
    var doc = '<!doctype html>';
    doc += '<title>Not found</title>';
    doc += '<h1>Page was not found</h1>';
    doc += '<p>Uh oh! We couldn’t find this page!</p>';
    res.status(404).send(doc);
}

