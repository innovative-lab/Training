var express = require("express");
var bp = require("body-parser");
var app = express();

	app.use(express.static(__dirname+"/views"));
	app.use(bp.urlencoded())
	
var msg="hello from repeat";
var title="pratik";
var heroes=["pratik","soumya","senapaty"];

app.get("/",function(req,res){
	res.render("home.jade",{
		msg:msg,
		title:title,
		hlist:heroes
		
	})
})

app.listen(9393);
console.log("server is running on 9393");