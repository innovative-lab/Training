(function(){
	
angular
     	.module("app")
     	.controller("menucontroller",function($scope,$rootScope,$http,loginservice){
     		 
     		 $scope.usr=$rootScope.user.mid2;
     		 // alert($scope.usr);
     		
    		// $scope.details = loginservice.get_details();
//     		
    		// alert($scope.details.mid);
// 		
     		
     		 
     		 $scope.emplist=null;
              $scope.eventName=""
              $scope.mid="";
              $scope.name="";
              $scope.photo="";
              $scope.date="";
              $scope.sttime="";
              $scope.etime="";
              $scope.loc="";
              $scope.details="";
              $scope.join="";
              
              var refresh= function(){
				$http.get("/emplist")
				.success(successHandler)
				.error(errorHandler)
			}
			refresh();
			function successHandler(r,s,x){
				$scope.emplist=r;
			}
			function errorHandler(e,s,x){
				alert("something went wrong..")
				
			}
     	
     	})
}())