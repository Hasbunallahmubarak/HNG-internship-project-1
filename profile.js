"use strict";
var x,weekday,day,date;
x = new Date();
weekday = x.getDay();
date = x.getTime();
switch(weekday){
	case 0:
		day = "Sunday";
		break;
	case 1:
		day = "Monday";
		break;
	case 2:
		day = "Tuesday";
		break;
	case 3:
		day = "Wednessday";
		break;
	case 4:
		day = "Thursday";
		break;
	case 5:
		day = "Friday";
		break;
	case 6:
		day = "Saturday";
}
function dayFunction() {
	document.getElementById('date').innerHTML = day;
}
function dateFunction() {
	document.getElementById('dateUTC').innerHTML = date;
}
document.getElementById('date').innerHTML = day;
document.getElementById('dateUTC').innerHTML = date;
