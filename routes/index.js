// importing depencies
var express = require('express');
var router = express.Router();

//Variable declerations
var database = [
	{
		name: "Henk",
		age: 20,
		preferences: ["heiniken", "amstel", "hertogjan"],
		image: "images/lol.png"
	},
	{
		name: "Jan",
		age: 22,
		preferences: ["klok", "amstel", "hertogjan"],
		image: "images/xd.png"
	}	
];


router.get('/', function(req, res){
	res.render('config');
});


router.get('/index', function(req, res){
	res.render('index', {
		users: database,	
//		name: database['User1'].Name,
//		age: database['User1'].Age,
//		match: "LOL"
	});
//	console.log(database['User1'].Name);
//	console.log(database['User2'].Name);
//	console.log(Object.keys(database).length);

});



module.exports = router;