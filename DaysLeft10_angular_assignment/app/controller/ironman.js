(function(){
	
	
	function man(){
		this.fname="tony";
		this.lname="stark";
		this.movie="ironman";
		this.power="8";
		this.photo="images/ironman.jpg"
	}
	
angular
        .module("mainapp")
        .controller("ironmanController",man)
	
	
	
	
}())
