angular.module("medhelp").controller("signin", function($scope,$location,$rootScope){
		$rootScope.display=false;
		$scope.password1="medhelp@kalinga"
	
      if ( localStorage.un3 == null || localStorage.un3=="undefined" ) {
         $location.path("/");
         //remove href =editdetails in signin
        } 
        
        else if(localStorage.un3 == "M1035897") {
          // not going to #login, we should redirect now
         if($scope.password1==$scope.password){
         	$location.path("/adminpage");
         }
         else{
         	$location.path("/");
         }
          
     //     alert("hello");
     //   redirectTo( "/fourthpage" );
      // $location= 'route/to/fourthpage';
        // $window.location.href = '/fourthpage';    
          
     
      }
      else if(localStorage.un3!="M1035897"){
      	if($)
      	 $location.path("/homepage");
      }
      else{
      	$location.path("/editdetails");
      }
     
	$scope.disp = function(){
		localStorage.un3=$scope.username;
	if ( localStorage.un3 == null || localStorage.un3=="undefined" ) {
         $location.path("/");
         //remove href =editdetails in signin
        } 
        
        else if(localStorage.un3 == "M1035897") {
          // not going to #login, we should redirect now
         if($scope.password1==$scope.password){
         	$location.path("/adminpage");
         }
         else{
         	$location.path("/");
         }
     //     alert("hello");
     //   redirectTo( "/fourthpage" );
      // $location= 'route/to/fourthpage';
        // $window.location.href = '/fourthpage';    
          
     
      }
      else if(localStorage.un3!="M1035897"){
      	 $location.path("/editdetails");
      }
      else{
      	$location.path("/homepage");
      }
		};

});
