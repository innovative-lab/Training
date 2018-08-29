(function(){
	
angular
     	.module("app")
     	.controller("menuController",function($scope,loginservice){
     		$scope.usersdb=loginservice.getLoginData();
     	})
}())
