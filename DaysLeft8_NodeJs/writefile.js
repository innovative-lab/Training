var fs = require("fs");

/*
fs.writeFile("./data.txt","Welcome to textfile",function(error,data){
	console.log("line nnum 4")
})

console.log("line num # 7")
 * 
 */

fs.writeFileSync("./data.txt","welcome from Syncfile")
console.log("line num# 15")
