var express = require("express");
var bp = require("body-parser");
var app = express();
var mongo = require("mongojs");
var db = mongo("gapp",["userdb"]);
	app.use(express.static(__dirname));
	app.use(bp.json());
	
	app.post("/addme",function(req,res){
		db.userdb.insert(req.body,function(error,data){
			console.log(data);
			res.json(data);
		})
	});
	
	app.listen(9797);
	console.log("server is runnign on 9797");
