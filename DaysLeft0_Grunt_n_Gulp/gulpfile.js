var gulp = require("gulp")
var gulputil = require("gulp-util");
var concat = require("gulp-concat");
var divyanshu = require("gulp-uglify")
var brow = require("gulp-browserify")

gulp.task("mindtree",function(){
	gulputil.log("this was my first task..")
})
var minifiles=["minifiles/one.js","minifiles/two.js","minifiles/three.js"]

gulp.task("combine",function(){
	//this module needs more info abt the files destination....
	gulp.src(minifiles)
	.pipe(concat("main.js"))
	.pipe(gulp.dest("script"));
})


gulp.task("mini",function(){
	gulp.src("script/main.js").pipe(divyanshu({mangle:false})).pipe(gulp.dest("dist"))
})

gulp.task("default",["combine","mini"],function(){
	gulputil.log("this was my first task..")
})


gulp.task("brow",function(){
	gulp.src("script/app.js")
		.pipe(brow)({
			insertGlobals : false
		})
		.pipe(gulp.dest("script"))});









