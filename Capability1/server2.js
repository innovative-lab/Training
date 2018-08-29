var express = require("express");
var bp = require("body-parser");
var app = express();

app.listen(8888);
app.use(express.static(__dirname));
app.use(bp.json());

var data={};

app.get("/",function(req,res){          //app.get is to send data from server to client on demand
	res.json(data);                           /*
	                                           * 
	                                            for sending a request from client side to get some data from server
	                                            you have to call
	                                            fetch() in ur client side
	                                          */
})





/*app.post("/",function(req,res){               //app.post is to save some data on server side from client side
	data.hero1=req.body;
	res.json(data);                           /*
	                                           * for saving some data in your server side from client side 
	                                           * you have to call 
	                                           *       1) add()
	                                           *       2) save()
	                                           *         or
	                                           *       3)create()
	                                           * 
	                                           
	                                           */
//})*/

console.log("your server is running on 8888")
