describe("this is my forst test in angular",function(){
	//=======================================================
	
	beforeEach
	{
		module("app")
	}
	
	var controller = null;
	
	beforeEach
	{
		inject(function($controller){
			controller=$controller;
		})
	}
	
	it("cheack for the title",function(){
		var emptyScope = {};
		controller("firstController",{
			$scope : emptyScope
		});
		expect(emptyScope.title()).toBe("superman")
	})
	
	//=======================================================
})
