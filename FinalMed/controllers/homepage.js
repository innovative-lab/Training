angular.module("medhelp").controller("homepage", function($scope, $window, $http,$rootScope){
	$rootScope.display = true;
	
	$scope.lon=null;
			$scope.lat=null;
			$scope.ack=false;
			$scope.findLoc=function(){
			//$window.location.reload();
				
					$scope.ack=true;
				console.log("In findLoc");
			if(navigator.geolocation){
				alert("Found Geolocation");
				navigator.geolocation.getCurrentPosition(successFun,errorFun);
			}//if
			
			};//findLoc
			
			$scope.showLoc=function(){
				
				$http.get("/show_loc")
				.success(function(r,s,x){
					$scope.pos=r;
					$scope.lon=pos[r.length-1].lon;
					$scope.lat=pos[r.length-1].lat;
				});
			};//showLoc
			
			function successFun(pos){
				$scope.seen=true;
				$scope.lon=pos.coords.longitude;
				$scope.lat=pos.coords.latitude;				
				var data={
					mid:localStorage.un3,
					lon:$scope.lon,
					lat:$scope.lat,
					seen : $scope.seen
				};
				$http.put("/update_loc",data)
				.success(successHandler)
				.error(errorHandler);
				
				
				}//successFun
				
				function errorFun(){
					console.log("Error");
				}//errorFun
		function successHandler(r,s,x){
				console.log("Data is sent to server");
				
			}
			
			function errorHandler(){
					console.log("Error");
			}
	
});
