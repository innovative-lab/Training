var fs = require("fs")

// fs.writeFileSync("./data.txt","welcome to hell");
// console.log("Request got")


var data=fs.readFileSync("./data.txt");

console.log(data.toString());
