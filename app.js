var express=require('express');
var swig=require('swig');
var path=require('path');
var mongoose=require('mongoose');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var User;
var app=express();
app.use(bodyParser());
app.use(favicon(path.join(__dirname,'favicon.ico' )));

function connection(){
	mongoose.connect('mongodb://127.0.0.1:27017/Users');
	var Schema=mongoose.Schema;
	var userSchema=new Schema({
		name:String,
		mob:String,
		email:String
	});
	User=mongoose.model('User',userSchema);
}
var indexPage=swig.compileFile(path.join(__dirname,'index.html'));
var displayPage=swig.compileFile(path.join(__dirname,'display.html'));
var indexPageOutput=indexPage({
	title: 'My App',
	pagename: 'Registration Form'
});

app.get('/user/add',function(req,res){
	res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(indexPageOutput);
    res.end();
});

app.post('/user/add',function(req,res){
	if(req.body.email==="")
		res.status(500).send('<h1>Email Id is missing</h1>');
	else{
		var newUser=new User({name:req.body.name,mob:req.body.mob,email:req.body.email});
		User.count({email: req.body.email}, function (err, count) {
  			if (!count) {
    			newUser.save(function (err, newUser) {
  					if (err) return console.error(err);
  					console.log("Done");
  					res.writeHead(200, {'Content-Type': 'text/html'});
    				res.write('<h1>User Added</h1>');
    				res.end();
				});
  			}
  			else {
    		// Handle err.
    		console.log('Email Id is not unique');
    		res.writeHead(200, {'Content-Type': 'text/html'});
    		res.write('<h1>Email Id is not unique</h1>');
    		res.end();
  			}
		});
	}
});
app.get('/users',function(req,res){
	User.find(function (err, newUser) {
  		if (err) return console.error(err);
  		var displayPageOutput=displayPage({user:newUser});
  		//console.log(newUser);
  		res.writeHead(200, {'Content-Type': 'text/html'});
    	res.write(displayPageOutput);
    	res.end();
	});
});
app.get('/users/:name',function(req,res){
	User.count({name: req.params.name}, function (err, count) {
  			if (count) {
    			User.find({name:req.params.name},function (err, newUser) {
  					if (err) return console.error(err);
  					var displayPageOutput=displayPage({user:newUser});
  					//console.log(newUser);
  					res.writeHead(200, {'Content-Type': 'text/html'});
    				res.write(displayPageOutput);
    				res.end();
				});
    		}
  			else {
    			// Handle err.
    			res.status(404);
				res.sendFile(path.join(__dirname,'404.html'));
  			}
	});
});
app.get('/*',function(req,res){
	res.status(404);
	res.sendFile(path.join(__dirname,'404.html'));
});
app.listen(1337,function(){
	console.log('Listening on port 1337');
	connection();
});
