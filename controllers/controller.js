var UserModel = require('../models/usermodel');

var UserController = module.exports = {


	add: function(req, res){
		var x = req.body;
		var newApp = new UserModel(x);
		newApp.save();
		res.render('submitted');
	},
	list: function(req,res){
		UserModel.find({}, function (err, doc) {
			res.render('applicants', {applicants:doc});
		});
	},
	remove: function(req,res){
		var x = req.params.id;
		UserModel.remove({_id: x}, function(err, doc){
			res.redirect('/applicants');
		});
	}
};

exports.list = function(req, res){
  res.send("respond with a resource");
};