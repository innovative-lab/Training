(function(){
	angular
	   .module("app")
	   .config(function($routeProvider){
	   	$routeProvider
		     	     .when("/",{
		     	     	controller:"loginController",
		     	     	templateUrl:"app/views/login_page.html"
		     	     })
		     	     .when("/menu",{
		     	     	controller:"menuController",
		     	     	templateUrl:"app/views/main_page.html"
		     	     })
		     	     .when("/currentevent",{
		     	     	controller:"currentEventController",
		     	     	templateUrl:"app/views/currentevent_page.html"
		     	     })
		     	     .when("/createevent",{
		     	     	controller:"createEventController",
		     	     	templateUrl:"app/views/createevent_page.html"
		     	     })
		     	     
	   })
}())

