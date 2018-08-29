angular
		   .module("app")
		    
		   .config(function($routeProvider){
		   	     
		   	      $routeProvider
		     	     .when("/",{
		     	     	controller:"heroesController",
		     	     	templateUrl:"app/view/hero.html"
		     	     })
		     	     .when("/movies/:id",{
		     	     	controller:"moviescontroller",
		     	     	templateUrl:"app/view/movie.html"
		     	     })
		     	     
		   })