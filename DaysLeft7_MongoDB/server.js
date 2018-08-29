var express = require("express");
var bp = require("body-parser");
var mongo = require("mongojs");
var db = mongo("student",["users"]);

var app = express();
    app.listen(1189);
    app.use(express.static(__dirname))
    app.use(bp.json());
    
app.get("/",function(req,res){
	res.send();
})
    
app.get("/emplist",function(req,res){
	db.users.find(function(error,documents){
		res.json(documents);
		console.log(documents)
	})
})

app.post("/emplist",function(req,res){
	console.log(req.body);
	db.users.insert(req.body,function(err,doc){
		console.log(doc);
		res.json(doc);
	})
	
})
app.delete("/emplist/:id",function(req,res){
	var eid=req.params.id;
	db.users.remove({_id:mongo.ObjectId(eid)},function(err,doc){
		res.json(doc)
	})
})

app.get("/emplist/:id",function(req,res){
	var eid= req.params.id;
	db.users.findOne({_id:mongo.ObjectId(eid)},function(error,documents){
		res.json(documents);
		console.log(documents)
	})
})

app.put("/emplist/:id",function(req,res){
	var eid=req.params.id;
	db.users.findAndModify({
		query : {_id:mongo.ObjectId(eid)},
		update : { $set:{
			fname:req.body.fname,
		}},
		new : true
		},
		 function(error,doc){
			res.send(doc);
	});
});




console.log("your serve is running on 1111")
