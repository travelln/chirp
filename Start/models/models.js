var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username: String,
	password: String, //hash created from password
	created_at: {type: Date, default: Date.now}
});


var postSchema = new mongoose.Schema({
	created_by: { type: mongoose.Schema.ObjectId, ref: 'User' },
	created_at: {type: Date, default: Date.now},
	text: String
});


mongoose.model('User', userSchema);
mongoose.model('Post', postSchema);
