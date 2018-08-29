angular.module("medhelp").controller("aboutus", function($scope, $window, $location){
	$scope.refrsh = function(){
	$window.location.reload();
	$location.path("/homepage");
	};
});


