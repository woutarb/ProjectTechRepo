// importing depencies
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
console.log('Server is running! port:', 8000);
require('dotenv').config();

mongo.MongoClient.connect(url, function(err, client){
	if(err){
		throw err
	}
	db = client.db(process.env.DB_SERVER)};

	
	
	url = ("mongodb+srv://" + process.env.DB_USERNAME + ":" + process.env.DB_PASSWORD + "@" + process.env.DB_SERVER + "/test?retryWrites=true&w=majority", { useNewUrlParser: true });

var db = mongoose.connection;

//Source check: https://www.youtube.com/watch?v=cVYQEvP-_PA

//Check:
db.once("open", function(){
 console.log("Connected to MongoDb");
});

// Check connection for errors in db
db.on("error", function(err){
 console.log(err);
});


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
	.use('/index', index)
	.use('/', config)
	// error handeling
    .use(notFound)
    .listen(8000);



function config(req, res){
	res.render('config');
}
function index(req, res){
	res.render('index', {users: db.collection('users').find().toArray()});
}


//error handeling, when the page is not found
function notFound(req, res) {
    var doc = '<!doctype html>';
    doc += '<title>Not found</title>';
    doc += '<h1>Page was not found</h1>';
    doc += '<p>Uh oh! We couldn’t find this page!</p>';
    res.status(404).send(doc);
}

module.exports = router;
