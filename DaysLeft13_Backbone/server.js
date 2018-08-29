var express = require("express");
var bp = require("body-parser");
 
var app = express();
app.listen(9999);
app.use(express.static(__dirname));
app.use(bp.json());
 
var data = {};
 
app.get("/heros", function(req, res){
    // res.header("Access-Control-Allow-Origin","http://127.0.0.1:8020");
    res.json(data);
})
app.post("/heros", function(req, res){
    console.log(req.body);
    data.hero1 = req.body;
  //  res.send();
})
app.get("/", function(req, res){
    res.send();
})
app.get("/secrets", function(req, res){
    res.send(data);
})
console.log("your server is now running on 9999 port");
    
