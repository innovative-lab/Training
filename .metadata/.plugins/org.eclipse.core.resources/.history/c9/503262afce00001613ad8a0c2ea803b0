angular.module("medhelp").controller("editdetails", function($scope,$window,$rootScope, $http,$location){  
	
	$scope.editdetails=function(){
       
        		    var mid=localStorage.un3;
        			$http.get("/display/"+mid)
        			.success(function(r,s,x){
        				var name=r.name
        				var age=r.age
        				var phone=r.phone
        				var gender=r.gender
        				var bg=r.bloodgroup
        				$("#name").val(name);
        				$("#age").val(age);
        				$("#phone").val(phone);
        				$("#gender").val(gender);
        				$("#bg").val(bg);
        				
        			})
        			.error(function(e,s,x){
        				alert("WRONG!!");
        			});
        			
        		};
        		
        		$scope.editdetails();
	
	$scope.add=function(){
		
				$scope.id=localStorage.un3;
		$scope.name=$("#name").val();
		$scope.age=$("#age").val();
		$scope.phone=$("#phone").val();
		$scope.gender=$("#gender").val();
		$scope.bg=$("#bg").val();
		
		var data={
			_id : $scope.id,
			name : $scope.name,
			age : $scope.age,
			phone : $scope.phone,
			gender : $scope.gender,
			bloodgroup : $scope.bg
		};
		$http.post("/save_loc",data)
	.success(function(r,s,x){
        				console.log("Data added");
        				$rootScope.display=true;
        				$window.location.reload();
        				
        			})
        			.error(function(e,s,x){
        				alert("Error!!!");
        			});
				};
				$scope.canc =  function(){
					$window.location.reload();
					$location.path("/homepage");
				};
			
				
				$scope.edit=function(){
				$scope.id=localStorage.un3;
		$scope.name=$("#name").val();
		$scope.age=$("#age").val();
		$scope.phone=$("#phone").val();
		$scope.gender=$("#gender").val();
		$scope.bg=$("#bg").val();
		
		var data={
			mid : $scope.id,
			name : $scope.name,
			age : $scope.age,
			phone : $scope.phone,
			gender : $scope.gender,
			bloodgroup : $scope.bg
		};
		$http.put("/edit",data)
	.success(function(r,s,x){
        				console.log("Data added");
        				$rootScope.display=true;
        				$window.location.reload();
        			})
        			.error(function(e,s,x){
        				alert("Error!!!");
	
        			});
      };
       
       
	 
});
