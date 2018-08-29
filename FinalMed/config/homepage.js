angular.module("medhelp").config(function($routeProvider){
	$routeProvider
	.when("/",{
		controller : "signin",
		templateUrl : "views/signin.html"
	})
	.when("/editdetails", {
		controller : "editdetails",
		templateUrl : "views/editdetails.html"
	})
	.when("/homepage",{
		controller : "homepage",
		templateUrl : "views/homepage.html" 
	})
	.when("/adminpage",{
		controller : "admin",
		templateUrl : "views/admin.html" 
	})
	.when("/aboutus",{
		controller : "aboutus",
		templateUrl : "views/aboutus.html" 
	});
	
	});
