var fs = require("fs");
var http = require("http");
fs.writeFileSync("./data.txt","FileSystem")
fs.readFile("./server.config",function(error,data){
	
	var data=JSON.parse(data+"");
	console.log(data.port);
	var port=data.port;
	var host=data.message;
	
	var server=http.createServer(function(req,res){
		res.writeHead(200,{"Content-type" : "text/html"});
		res.write(req.data);
		console.log(res.url);
		
		
		//res.end();
	})
	server.listen(port,host,function(req,res){
		console.log("your sever is running on"+host+" "+port);
	})
	
});