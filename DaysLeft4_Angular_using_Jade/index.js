var express = require("express");
var app = express();
//    app.set("view engine","jade")


/*var bp = require("body-parser");

    app.use(bp.urlencoded());
app.get("/",function(req,res){
	res.render("home.jade")
});
 
app.post("/",function(req,res){
		console.log(req.body.heroName);
		heros.push(req.body.heroName);
		res.render("home.jade",{
		msg:message,
		title:title,
		hlist:heros
	});
	
}); */
var title="soumya"
var heros=["batman","superman","spiderman","shaktiman"]
var message="welcome to my home"

app.get("/",function(req,res){
	res.render("home.jade",{
		msg:message,
		title:title,
		hlist:heros
		
		
	})
})



app.listen(5678);
console.log("serve ris running on localhost:5678");

