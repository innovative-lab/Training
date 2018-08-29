(function(){

function myfun($scope){

$scope.heroes = [
{title:'batman',   fname : 'Bruce', lname : 'Wayne',    city : 'Gotham',         power : 7, price : 876.45678, releasedate : '2016-03-30', photo: 'images/batman.jpg'},
{title:'superman', fname : 'Clark', lname : 'Kent',     city : 'Metropolis',     power : 8, price : 940.64578, releasedate : '2016-03-27', photo: 'images/superman.jpg'},
{title:'spiderman',fname : 'Peter', lname : 'Parker',   city : 'New york',       power : 7, price : 750.46758, releasedate : '2016-03-23', photo: 'images/spiderman.jpg'},
{title:'ironman',  fname : 'Tony',  lname : 'Stark',    city : 'New york',       power : 7, price : 450.54678, releasedate : '2016-03-24', photo: 'images/ironman.jpg'},
{title:'phanthom', fname : 'Kit',   lname : 'Walker',   city : 'Bhangala',       power : 6, price : 320.74568, releasedate : '2016-03-19', photo: 'images/phantom.jpg'}
];

$scope.sorton='title';
$scope.sortFun=function(val){
	$scope.sorton=val;
}



};
angular.module("app").controller("mycontroller",myfun)

}())