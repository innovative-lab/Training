 (function(){
 	
 	function myfun(){
 		this.fname="soumya";
 		this.lname="pratik";
 		this.power=10
 	}
 	
 angular
		 .module("mainapp")
		 .controller("firstController",myfun)
		 
		 
}())