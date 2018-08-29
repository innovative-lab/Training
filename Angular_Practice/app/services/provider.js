(function(){
	angular.module("app").provider("myprovider",{
		$get:function(){
			return "welcome to provider"
		}
	})
}())
