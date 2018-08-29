angular
		  .module("app")
		  .config(function($routeProvider){
		     	     $routeProvider
		     	     .when("/",{
		     	     	controller:"heroesController",
		     	     	templateUrl:"app/view/heroes.html"
		     	     })
		     	     .when("/movies",{
		     	     	controller:"moviesController",
		     	     	templateUrl:"app/view/movies.html"
		     	     })
		     	    
		     	
		     })