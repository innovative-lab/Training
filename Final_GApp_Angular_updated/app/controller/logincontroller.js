(function(){
	  
	angular
	  .module("app")
	  .controller("logincontroller",function($scope,$rootScope,$location,$http){
	  	
	  	
	  	$scope.uname="";
		$scope.pswrd="";
		// $scope.checkfun=function(){
			// var data={
				// uname:$scope.mid1,
				// pswrd:$scope.password	
			// }
			// $http.post("/user",data).success(function(r,s,x){
				// console.log("post success");
				// if(r==null){
					// document.getElementsByClassName("box")[0].innerHTML="Wrong Password"
				// }else{
					// $location.path("/menu");
				// }
				// console.log(r);
			// }).error(function(e,s,x){
				// console.log("Something wrong in post");
			// });
			// }
	  	//$scope.mid1=-1;
	  	 // $rootScope.u_mid=mid1
	  	 // alert($root.u_mid);
    	// $scope.data={
    		// mid:$scope.mid1,
    		// pass:$scope.password
    	// }
// 	  	 
// 	  	 
	  	// $scope.callToAddToDetails = function(data){
        	// loginservice.add_details(data);
    	// };
    	
    	$scope.login_data=function(){
    		console.log(":aieytr8");
    		console.log($scope.mid1);
    		$rootScope.user={
    		           "mid2":$scope.mid1,
    		           "pass":$scope.password
    		                 };
    		//alert($rootScope.umid);
    		
    		var data={
				uname:$scope.mid1,
				pswrd:$scope.password	
			}
			$http.post("/user",data).success(function(r,s,x){
				console.log("post success");
				if(r==null){
					document.getElementsByClassName("box")[0].innerHTML=" ** Invalid UserName/Password"
				}else{
					$location.path("/menu");
				}
				console.log(r);
			}).error(function(e,s,x){
				console.log("Something wrong in post");
			});
    	};
    	
    
    
	  	 //alert($rootScope.mid1)
	  	
	  	   // $rootScope.lmid=mid1;
	  })
}())
