(function(){
	
	
	function batman(){
		this.fname="bruce";
		this.lname="wyane";
		this.movie="batman";
		this.power="8";
		this.photo="images/batman.jpg"
	}
	
angular
        .module("mainapp")
        .controller("batmanController",batman)
	
	
	
	
}())
