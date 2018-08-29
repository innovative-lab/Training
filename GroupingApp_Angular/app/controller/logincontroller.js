(function(){
	
angular
     	.module("app")
     	.controller("loginController",function($scope,loginservice){
     		$scope.logindb=loginservice.getLoginData();
     	})
}())
