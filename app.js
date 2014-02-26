
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var controller = require('./controllers/controller.js');
var ApplicantModel = require('./models/usermodel');
var app = express();

// all environments
app.set('port', process.env.PORT || 3001);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
mongoose.connect('mongodb://localhost/lexcorp');


//renders the index page
app.get('/', function(req, res){
	res.render('index');
});

// displays a list of applicants
app.get('/applicants', controller.list);

// creates an applicant
app.post('/newapplicant', controller.add);

//show individual applicant
app.get('/:id', controller.indiv);

// deletes an applicant
app.get('/applicants/:id', controller.remove);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
