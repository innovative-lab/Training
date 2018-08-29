angular.module("medhelp").controller("admin",function($rootScope,$scope,$http,$interval){
                $scope.lon=null;
                $scope.lat=null;
               $scope.pos=null;
               $scope.show=null;
               $scope.l=null;
               $scope.detailsshow=false;
               $scope.notificationshow=false;
               $scope.notification2show=true;
               $scope.len=0;
                $scope.showLoc=function(){
                     console.log(" IN showLoc");
                     $http.get("/show_loc")
                     .success(function(r,s,x){
                           $scope.l=r.length-1;
                           console.log($scope.l);
                           $scope.pos=r;
                           $scope.i=0
                           for(i=0;i<r.length;i++){
                           if(r[i].seen==true)
                           {
                           
                           console.log($scope.pos);
                           console.log($scope.pos[i].longitude);
                           console.log($scope.pos[i].longitude);
                           $scope.notificationshow=true;
                           $scope.lon=$scope.pos[i].longitude;
                           $scope.lat=$scope.pos[i].latitude;
                           $rootScope.mid=$scope.pos[i]._id;
                           $scope.nm=$scope.pos[i].name;
                           $scope.bg=$scope.pos[i].bloodgroup;
                           $scope.gender=$scope.pos[i].gender;
                           $scope.age=$scope.pos[i].age;    
                           $scope.phone=$scope.pos[i].phone;                       
                           console.log($scope.lon);
                           var mapOptions={
	center: new google.maps.LatLng($scope.lat,$scope.lon),
	zoom:18,
		
	mapTypeId:google.maps.MapTypeId.SATELLITE
	};
	console.log($scope.lat);
	console.log($scope.lon);
var map=new google.maps.Map(document.getElementById("map"),mapOptions);
	
	var markerOptions={
		position:new google.maps.LatLng($scope.lat,$scope.lon)
	};
	
	var marker=new google.maps.Marker(markerOptions);
	marker.setMap(map);
	var infoWindowOptions={
  content:$scope.nm +" is here"
 };
 var infoWindow=new google.maps.InfoWindow(infoWindowOptions);
 google.maps.event.addListener(marker,"click",function(e){
  infoWindow.open(map,marker);
 })
 $interval.cancel($scope.call);
                           }
                           }
 
                           
                     });
                };//showLoc
                

                     function errorFun(){
                           console.log("Error");
                     }//errorFun
                     
                             $scope.call= $interval($scope.showLoc,1000);
                                $scope.detailsfun=function(){
                     $scope.detailsshow=!$scope.detailsshow;
                     
                };
                $scope.approvefun=function(){
                     console.log($rootScope.mid);
                   var  mid=$rootScope.mid;
               $scope.call= $interval($scope.showLoc,1000);
                   
                    $http.put("/approve/"+mid)
        			.success(function(r,s,x){
        				$scope.notificationshow=false;
        				$scope.detailsshow=false;
        				console.log("Record updated");
        				location.reload();
        				
        			})
        			.error(function(e,s,x){
        				alert("Error");
        			});
                };        
           });
