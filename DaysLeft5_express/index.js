
var express=require("express");
var app=express();

var bp=require("body-parser");
app.use(express.static(__dirname+"/views"));

//app.set("view engine","jade");
var title="my app";
var msg="heroes";
var heroes=["Arjun","Karthik","Vijay","Adithya","Yashas"];

app.use(bp.urlencoded());


/*app.get("/",function(req,res){
	res.render("home.jade");
});
*/

app.get("/",function(req,res){
	res.render("home.jade",{
		msg:msg,
		title:title,
		hlist:heroes
	
	});
});

app.post("/",function(req,res){
	console.log("data posted");
	console.log(req.body.heroName);
	heroes.push(req.body.heroName);
	res.render("home.jade",{
		msg:msg,
		title:title,
		hlist:heroes
	});
});

app.listen(5678);
console.log("running on server 5678"); 
