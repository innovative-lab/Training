(function(){
	
angular
     	.module("app")
     	.controller("createEventController",function($scope,loginservice){
     		$scope.logindb=loginservice.getLoginData();
     	})
}())
