var fs = require("fs");
var http = require("http");

fs.readFile("./server.config",function(error,data){
	
	var data = JSON.parse(data+"")
	
	var port=data.port;
	var host=data.host;
	
	var server=http.createServer(function(req,res){
		res.writeHead(200,{"Content-type":"text/plain"})
		res.write(req.url);
		res.end();
	})
	
	server.listen(port,host,function(){
		console.log("server running on"+host+post)
	})
})
