var Hero=function(){
	
	
}

Hero.prototype.age=function(){
	return 22;
}

Hero.prototype.msg=function(){
	return "Bhook lagi hai";
}

Hero.prototype.talk=function(){
	return true;
}

Hero.prototype.walk=function(gen){
	return gen+10;
}

Hero.prototype.fullname=function(fname,lname){
    if(!fname || !lname){
    	throw new Error("i want both");
    	
    }
    else{
    	return fname+" | "+lname
    }
}

var noHero=function(){
	// this.fly=function(){
		return "sushant";
	// }
}
