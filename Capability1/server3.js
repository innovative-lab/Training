var express = require("express");
var bp = require("body-parser");
var app = express();

	app.use(express.static(__dirname));
	app.use(bp.json());
	
	app.get("/hero")
