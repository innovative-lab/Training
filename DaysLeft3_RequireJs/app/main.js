require.config({
	paths :{
		"angular"      :  "../lib/angular",
		"app"          :  "app",
		"anothermodule":  "anothermodule"
	},
	shim :{
		"app":{
			deps:["angular","anothermodule"]
		},
		"anothermodule":{
			deps:["angular"]
		}
	}
})
//-----------------------------------------

//require("name",[dependancies],function(){})

require(["app"],function(app){
	angular.bootstrap(document.body,["app"])
})
