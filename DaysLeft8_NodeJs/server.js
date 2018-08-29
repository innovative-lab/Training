var fs = require("fs");

/*
 * 
})
var data=fs.readFile("./data.txt",function(error,data){
	console.log(data.toString());
 */

var data=JSON.parse(fs.readFileSync("./data.json").toString());

console.log(data);

