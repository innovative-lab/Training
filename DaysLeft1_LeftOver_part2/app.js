var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var session = require("client-sessions");
var bcrypt = require("bcryptjs");
var csrf = require("csurf");

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var User = mongoose.model("User", new Schema({
    id : ObjectId,
    firstName : String,
    lastName : String,
    email : {type : String, unique : true},
    password : String
}))

var app = express();
    app.locals.pretty = true;
    
    // Middle Wear
    app.use(bodyParser.urlencoded({ extended : true }));
    app.use(session({
        cookieName : "session",
        secret : "ASDFG12345asdffsd98765essddfsdff87654esfweSDSDDFSDF",
        duration : 30 * 60 * 1000,
        activeDuration : 10 * 60 * 1000
    }));
    app.use(csrf());
    
    // DB Connect    
    mongoose.connect("mongodb://localhost/mtuser");
    
app.get("/", function(req, res){
    res.render("index.jade");
});

app.get("/register", function(req, res){
    res.render("register.jade", { csrfToken: req.csrfToken() });
});

app.post("/register", function(req, res){
    // res.json(req.body);
    var hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    var user = new User({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        password : hash                //// now we are storing the password hash insted of password 
    });
    
    user.save(function(err){
        if(err){
            if(err.code === 11000){
                error = "eMail id already used"
            }else{
                error = "some thing went wrong"
            }
            res.render("register.jade",{
                error : error
            })
        }else{
            res.redirect("/profile")
        };
        
    });
});

app.get("/login", function(req, res){
    res.render("login.jade", { csrfToken: req.csrfToken() });
});

app.post("/login", function(req, res){
    User.findOne({ email:req.body.email }, function(error, user){
        if(!user){
            res.render("login.jade",{
                error : " no user by that credentials "
            })
        }else{
            if(bcrypt.compareSync(req.body.password, user.password)){                    ////    instead of comparing the passwords directly we are now comparing it with hash
                req.session.user = user;                                        
                res.redirect("/profile");
            }else{
                res.render("login.jade",{
                    error : "Invalid email or password "
                })
            }
        }
    })
});

app.get("/profile", function(req, res){
    // res.render("profile.jade");
    if(req.session && req.session.user){
        User.findOne({email:req.session.user.email}, function(err, user){
            if(!user){
                req.session.reset();
                res.redirect("/login");
            }else{
                res.locals.user = user;
                res.render("profile.jade");
            }
        })
    }else{
        res.redirect("/login")
    }
});

app.get("/logout", function(req, res){
    req.session.reset();
    res.redirect("/")
});

app.listen(3000);
console.log("server is now running on localhost : 3000");
