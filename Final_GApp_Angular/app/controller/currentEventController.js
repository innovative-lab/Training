(function(){
	
angular
     	.module("app")
     	.controller("currentEventcontroller",function($scope,$http,$routeParams,$rootScope){
     		
     		$scope.param=$routeParams.id;
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
              $scope.join=[];
              
              $scope.add_me=function(){
              	console.log($rootScope.user);              
              	$scope.join=$scope.emplist.Joined;
              	console.log($scope.join);
              	$scope.join.push($rootScope.user.mid2.toString());
              	console.log($scope.join)
              	// $scope.emplist.Joined=[];
              	// console.log($scope.emplist.Joined);
              	// $scope.emplist.Joined=[];
              	// $scope.emplist.Joined.push($rootScope.user.mid2.toString());
              	console.log($scope.emplist.Joined);
              		var data = {
              		"arr":$scope.join
              	};
              	console.log(data);
                $http.put("/emplist/"+$scope.param , data)
			    	.success(function(r,s,x){
						console.log("update request called..")
						
		    		})
              }
              
		    
              var refresh= function(){
              	var data = {
              		"id":$scope.param.toString()
              	}
				$http.post("/emplist1",data)
				.success(successHandler)
				.error(errorHandler)
			}
			refresh();
			function successHandler(r,s,x){
				$scope.emplist=r;
				$scope.join=$scope.emplist.Joined;
				console.log($scope.join);
			}
			function errorHandler(e,s,x){
				alert("something went wrong..")
				
			}
              function someFun(){
		  		$scope.selectedObject=$scope.emplist[$scope.param];
		  	}
     	})
}())
