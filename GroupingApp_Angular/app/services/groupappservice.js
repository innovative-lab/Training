(function(){
	angular
	   .module("app")
	   .service("loginservice",function(){
	   	var userdb=[
{_id:"evt1", mid:"M1035885", name:"Vignesh N", evtname:"Movie", evt_type:"Private", date:"06-04-2016", stime:"18:30", etime:"21:30", location:"INOX-Bhavani Mall", details:"Batman vs Superman"},
{_id:"evt2", mid:"M1035806", name:"Pratibha Ramana", evtname:"Dinner", evt_type:"Private", date:"05-04-2016", stime:"19:30", etime:"21:30", location:"The ADDA, KIIT Road", details:""},
{_id:"evt3", mid:"M1035908", name:"Neupa Sinha", evtname:"Trip", evt_type:"Public", date:"10-04-2016", stime:"07:30", etime:"21:30", location:"Puri Temple", details:"Assembly point is Chandaka SEZ Gate"},
{_id:"evt4", mid:"M1036103", name:"Srija A S", evtname:"Shopping", evt_type:"Private", date:"08-04-2016", stime:"18:30", etime:"21:30", location:"Big Bazaar, KIIT Road", details:""},
{_id:"evt5", mid:"M1035864", name:"Saurav Kumar", evtname:"Concert", evt_type:"Private", date:"09-04-2016", stime:"18:30", etime:"21:30", location:"", details:"Batman vs Superman"},
{_id:"evt6", mid:"M1035897", name:"Balreddy Sudhakar", evtname:"Sightseeing", evt_type:"Public", date:"11-04-2016", stime:"18:00", etime:"22:00", location:"KIIT Road", details:""},
{_id:"evt7", mid:"M1036095", name:"Pooja Arya", evtname:"Shopping", evt_type:"Private", date:"06-04-2016", stime:"19:30", etime:"22:00", location:"Brand Factory, Bhawani Mall", details:"Assembly point is Infocity Gate"},
{_id:"evt8", mid:"M1036082", name:"Sourav Haldar", evtname:"Dinner", evt_type:"Private", date:"07-04-2016", stime:"20:00", etime:"22:00", location:"99 North, Near Infocity", details:""}
]
	
	     this.getLoginData= function(){
	     	return userdb
	     }
	     
	   })
}())
