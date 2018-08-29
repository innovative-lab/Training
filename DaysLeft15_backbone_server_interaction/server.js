var express = require("express");
var bp = require("body-parser");
var app = express();
    app.use(bp.json());
    app.use(express.static(__dirname));
    
var data = {};
    app.get("/heros", function(req,res){
        res.json(data);
    })
    app.post("/heros", function(req,res){
        res.json(data);
    })
    app.get("*", function(req,res){
        res.sendFile(__dirname+"/index.html");
    })
    app.listen("9090");
    console.log("the server is now running on prot 9090");
