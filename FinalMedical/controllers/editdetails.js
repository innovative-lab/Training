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
        				$("#per1").val(r.e_person1);
        				$("#num1").val(r.e_num1);
        				$("#per2").val(r.e_person2);
        				$("#num2").val(r.e_num2);
        				$("#per3").val(r.e_person3);
        				$("#num3").val(r.e_num3);
        				
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
		$scope.per1="";
		
		
		var data={
			_id : $scope.id,
			name : $scope.name,
			age : $scope.age,
			phone : $scope.phone,
			gender : $scope.gender,
			bloodgroup : $scope.bg,
			e_person1:$scope.person1,
			e_num1:$scope.num1,
			e_person2:$scope.person2,
			e_num2:$scope.num2,
			e_person3:$scope.person3,
			e_num3:$scope.num3
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
		$scope.person1=$("#per1").val();
		$scope.num1=$("#num1").val();
		$scope.person2=$("#per2").val();
		$scope.num2=$("#num2").val();
		$scope.person3=$("#per3").val();
		$scope.num3=$("#num3").val();
		var data={
			mid : $scope.id,
			name : $scope.name,
			age : $scope.age,
			phone : $scope.phone,
			gender : $scope.gender,
			bloodgroup : $scope.bg,
			e_person1:$scope.person1,
			e_num1:$scope.num1,
			e_person2:$scope.person2,
			e_num2:$scope.num2,
			e_person3:$scope.person3,
			e_num3:$scope.num3
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
