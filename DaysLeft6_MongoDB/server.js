var express = require("express");
var bp = require("body-parser");
var mongo = require("mongojs");


var db = mongo("user:pss@ds015780.mlab.com:15780/campusmind",["emp"]);


var app = express();
    app.use()
    
