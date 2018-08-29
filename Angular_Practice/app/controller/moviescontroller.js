angular
          .module("app")
		  .controller("moviescontroller",function($scope,$routeParams,vjval,pratik,mtfactory,myprovider){
		  	$scope.pra=pratik;
		  	$scope.message=vjval;
		  	$scope.param=$routeParams.id;
		  	$scope.prov=myprovider;
		  	$scope.selectedMovies=[];
		  	
		  	
		  	function someFun(){
		  		$scope.selectedMovies=$scope.heroes[$scope.param].movieslist;
		  	}
		  	
		  	
		  	$scope.heroes= mtfactory.hlist;
		  someFun();
		  })