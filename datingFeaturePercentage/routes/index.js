// importing depencies
var express = require('express');
var router = express.Router();

//Variable declerations
var database = {
	Users : {
		Name: "Henk",
		Age: 20,
		Preferences: ["heiniken", "amstel", "hertogjan"],
		Image: "images/lol.png"
	},
	User2 : {
		Name: "Jan",
		Age: 22,
		Preferences: ["klok", "amstel", "hertogjan"],
		Image: "images/xd.png"
	}	
};


router.get('/', function(req, res){
	res.render('config');
});


router.get('/index', function(req, res){
	res.render('index', {
		match: "50"
	});
});



module.exports = router;