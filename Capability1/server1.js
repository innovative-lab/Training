var express = require("express");
var bp = require("body-parser");
var app = express();

app.listen(1234);
app.use(express.static(__dirname));
app.use(bp.json());

var data={};

app.get("/hero",function(req,res){
	res.json(data);
})
app.post("/hero",function(req,res){
	data.hero1=req.body;
	res.json(data);
})
app.get("*",function(req,res){
	res.json();
})


console.log("your server running on 1234")
