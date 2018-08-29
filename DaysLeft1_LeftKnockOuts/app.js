var express = require("express");
var bp = require("body-parser");
var mongoose = require("mongoose");
var app = express();
    app.locals.pretty = true;
    app.use(bp.urlencoded({extended : true}));
app.get("/", function(req, res){
    res.render("index.jade");
});

app.get("/register", function(req, res){
    res.render("register.jade");
});

app.post("/register",function(req,res){
	res.json(req.body);
});

app.get("/login", function(req, res){
    res.render("login.jade");
});

app.get("/profile", function(req, res){
    res.render("profile.jade");
});

app.get("/logout", function(req, res){
    res.redirect("/")
});

app.listen(3000);
console.log("server is now running on localhost : 3000");
