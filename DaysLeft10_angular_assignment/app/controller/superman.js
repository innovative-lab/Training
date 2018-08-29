(function(){
	
	
	function man(){
		this.fname="clark";
		this.lname="kent";
		this.movie="superman";
		this.power="9";
		this.photo="images/superman.jpg"
	}
	
angular
        .module("mainapp")
        .controller("supermanController",man)
	
	
	
	
}())
