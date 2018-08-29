var fs = require("fs");
var http = require("http");

fs.readFile("./server.config",function(error,data){
	
	var data=JSON.parse(data+"");
	console.log(data.port);
	
	var port=data.port;
	var host=data.message;
	
	var server= http.createServer(function(req,res){
		res.writeHead({"Content-type" : "text/plain"});
		res.write(data.url);
		res.end();
		
		console.log(req.url);
	})
	
	server.listen(port,host,function(){
		console.log("server is running on "+host+" "+port);
	})
})
