var express=require("express");
var app=express();

var bp=require("body-parser");
app.use(bp.json());
app.use(express.static(__dirname));

var mongo=require("mongojs");
var db=mongo("medhelp",["mdetails"]);


app.get("/",function(req,res){
	res.send();
});

app.post("/save_loc",function(req,res){
	console.log(req.body)
		db.mdetails.insert(req.body,function(err,data){
			res.json(data);
			console.log("Data saved on db");
})
});
app.put("/update_loc",function(req,res){
	var id=req.body.mid;
	console.log(req.body.mid);

		db.mdetails.findAndModify({
    		query : {_id : id},
    		update : {$set: {
    				"longitude" : req.body.lon,
    				"latitude" : req.body.lat,
    				"seen" :req.body.seen
    			}},
    			new : true
    		},
    		function(err,doc){
    			res.send(doc);
    			console.log(doc);
    		}
    );
    	
});
app.put("/edit",function(req,res){
	var id=req.body.mid;
	console.log(req.body.mid);

		db.mdetails.findAndModify({
    		query : {_id : id},
    		update : {$set: {
    		name : req.body.name,
			age : req.body.age,
			phone : req.body.phone,
			gender : req.body.gender,
			bloodgroup : req.body.bloodgroup,
			e_person1 : req.body.e_person1,
			e_num1 : req.body.e_num1,
			e_person2 : req.body.e_person2,
			e_num2 : req.body.e_num2,
			e_person3 : req.body.e_person3,
			e_num3 : req.body.e_num3,
    			}},
    			new : true
    		},
    		function(err,doc){
    			res.send(doc);
    			console.log(doc);
    		}
    );
    	
});


app.get("/show_loc",function(req,res){
	db.mdetails.find(function(error,doc){
		console.log(doc);
		res.send(doc);
});
});
app.get("/display/:mid",function(req,res){
	var mid=req.params.mid;
	console.log(mid);
	db.mdetails.findOne({_id : mid },function(err,doc){
		console.log(doc);
    		res.send(doc);
    	});
});

app.get("/Admin",function(req,res){
		res.sendFile(__dirname+"/Admin.html",function(er){
			if(er)
			{
				console.log(er);
			}
			else
			{
				console.log("sent");
			}
		}); 
	
});

 app.put("/approve/:id",function(req,res){
    	var mid=req.params.id;
    	
    	db.mdetails.findAndModify({
    		query : {_id : mid},
    		update : {$set: {
    				"seen" : false
    			}},
    			new : true
    		},
    		function(err,doc){
    			res.send(doc);
    			console.log(doc);
    		}
    	
    );
   /* 	
    	db.mdetails.remove({_id : mid},function(err,doc){
    		res.send(doc);
    	}
    	);
    	*/
});
app.listen(2222);
console.log("Server is running on 2222");
