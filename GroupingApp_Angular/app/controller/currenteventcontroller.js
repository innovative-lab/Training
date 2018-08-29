(function(){
	
angular
     	.module("app")
     	.controller("currentEventController",function($scope,loginservice){
     		$scope.logindb=loginservice.getLoginData();
     	})
}())
