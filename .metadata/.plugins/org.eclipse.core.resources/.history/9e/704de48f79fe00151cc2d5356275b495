(function(){
	
angular
     	.module("app")
     	.controller("createEventcontroller",function($scope,$http){
     		
     		
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
     		
     		 $scope.addFun=function(){
               
              $scope.imgdata=["images/1.jpg","images/2.jpg","images/3.jpg","images/download.jpg","images/download1.jpg",]
               var data={
               	   eventName:$scope.evt,
                   mid : $scope.mid,
                   name : $scope.name,
                   photo : $scope.imgdata[Math.round(Math.random()*5)],
                   date :$scope.date,
                   starttime :$scope.stime,
                   endtime:$scope.etime,
                   location:$scope.loc,
                   Details:$scope.desc,
                   Joined:[],
               };
               $http.post("/emplist",data)
               .success(function(r,s,x){
                   console.log("data uploaded on server")
                   refresh();
               })
               .error(errorHandler)
          }
     	})
}())
