var express = require("express");
var app = express();
var data = {
  "heroes": {
    "hero": [
      {
        "title": "Batman",
        "fName": "Bruce",
        "lName": "Wayne",
        "city": "Gotham",
        "movies": "3"
      },
      {
        "title": "Superman",
        "fName": "Clark",
        "lName": "Kent",
        "city": "Metropolis",
        "movies": "3"
      },
      {
        "title": "Ironman",
        "fName": "Tony",
        "lName": "Stark",
        "city": "New York",
        "movies": "3"
      },
      {
        "title": "Phantom",
        "fName": "Kit",
        "lName": "Walker",
        "city": "Bhangala",
        "movies": "1"
      },
      {
        "title": "Captain America",
        "fName": "Steve",
        "lName": "Rogers",
        "city": "New York",
        "movies": "2"
      }
    ]
  }
};
app.get("/", function(req, res){
    res.header("Access-Control-Allow-Origin","*")
    res.send(data);
});
app.listen(5555);
console.log("your server is now running on 5555");
