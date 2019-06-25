var mongoose = require('mongoose');

// User layout
var userLayout = mongoose.Schema({
	user:{
	type: Array,
	require: true
	},
    name:{
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
	preferences:{
		type: Array,
		required: true
	},
	}
);

var user = module.exports = mongoose.model('User', userLayout);