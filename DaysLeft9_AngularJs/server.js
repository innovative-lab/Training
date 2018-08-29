var express = require("express");
var bp = require("body-parser");
var fs =  require("fs")

var app=express();
	app.use(express.static(__dirname));
	app.use(bp.json());
	
	var data=[];
	
	app.get("/",function(req,res){
		data=fs.readFileSync(JSON.parse("data.json").toString());
		res.send(data);
	})
	
	app.listen(8888);
	console.log("your server running on 8888")
