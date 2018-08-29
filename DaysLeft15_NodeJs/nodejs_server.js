var http = require("http");
var host = "localhost";
var fs = require("fs");
var port = 2345;

var server = http.createServer(function(req, res){
//     console.log(req.url);
    fs.readFile("./"+req.url, function(error, data){
        if(data){
            res.writeHead(200, {"Content-type":"text/html"})
            res.write(data);
            res.end();
        }else{
            res.writeHead(404, {"Content-type":"text/html"})
            res.write("File not found");
            res.end();
        }
    });
});
server.listen(port, host, function(){
    console.log("server is now running on port "+port);
})
