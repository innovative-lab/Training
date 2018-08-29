var express = require("express");
var bp = require("body-parser");
var mongo = require("mongojs");
var db = mongo("student",["users"]);

var app=express();
app.listen(5555);
app.use(express.static(__dirname+"/public"));
app.use(bp.json());




app.get("/",function(req,res){
	res.send();
})
app.get("/herolists",function(req,res){
	db.users.find(function(error, documents){
		console.log(documents);
	   res.json(documents);
	})
})
app.post("/herolists",function(req,res){
	console.log(req.body);
	db.herolist.insert(req.body,function(err,doc){
		console.log(doc);
		res.json(doc);
	})
	
})
console.log("working on 5555")

