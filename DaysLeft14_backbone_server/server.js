var express = require("express");
var bp = require("body-parser");
var fs = require("fs");
var app = express();
    app.use(express.static(__dirname));
    app.use(bp.json());
    
var hero = [];

app.get("/hero", function(request,response){
    response.send(hero);
});
app.post("/hero", function(request,response){
    //console.log(request.body);
    hero.push(request.body);
    fs.writeFile("data.txt", JSON.stringify(hero), function(error, data){
        console.log("file ready")
    })
    response.send(request.body);
});

app.get("/", function(request,response){
    response.send();
});
app.listen(3000);

console.log("your server is now running on 2233")
