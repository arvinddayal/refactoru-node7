var UserModel = require('../models/usermodel');

var UserController = module.exports = {

	list: function(req,res){
		UserModel.find({}, function (err, docs) {
			res.render('applicants', {applicants:docs});
		});
	},
};

exports.list = function(req, res){
  res.send("respond with a resource");
};