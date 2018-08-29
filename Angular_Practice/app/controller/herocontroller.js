angular
          .module("app")
		  .controller("heroesController",function($scope,mtservice){
		  	$scope.heroes= mtservice.getHeroes()
		  })