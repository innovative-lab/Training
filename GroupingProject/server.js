
var express=require("express");
var bp=require("body-parser");
var mongo=require("mongojs");
var db=mongo("gapp",["eventdb"]);

var app=express();
app.use(express.static(__dirname));
app.use(bp.json());
app.get("/",function(req,res){
     res.send();
});
app.get("/emplist",function(req,res){
     db.eventdb.find(function(error,documents){
          console.log(documents);
          res.json(documents);
     });
});
app.post("/emplist",function(req,res){
     db.eventdb.insert(req.body,function(error,documents){
          console.log(documents);
          res.json(documents);
     });
});

app.put("/emplist/:id",function(req,res){
	console.log("==============")
	var event_id=req.params.id;
	console.log(join_id);
	
	console.log("==============")
	console.log(event_id);
	db.eventdb.update({ mid:event_id },
		 {$push: {Joined:req.body.join_id}}
		
		
		 ,function(error,doc){
			res.send(error);
	});
});


     app.listen(5555);
     console.log("server is running on port 5555"); 