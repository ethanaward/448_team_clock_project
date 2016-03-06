/**
*	@file : ChangeFont.js
*	@author : Mike Neises, Travis Augustine, Ethan Ward
*	@date : 2016.03.06
*	@brief: Functions for setting initial font size, increasing, decreasing, and hiding the displays.
*/

/**
	*  @name 
	*  @pre None
	*  @post The four elements are set to an initial font size
	*  @return none
*/
function initialFont() {
	var clock = document.getElementById("time");
	var timer = document.getElementById("timer");
	var stopwatch = document.getElementById("stopwatch");
	var weekDay = document.getElementById("dayOfWeek");

	clock.style.fontSize = "70px";
	timer.style.fontSize = "70px";
	stopwatch.style.fontSize = "70px";
	weekDay.style.fontSize = "70px";
}

/**
	*  @name 
	*  @pre None
	*  @post The four elements are increased in font size
	*  @return none
*/
function increaseFont() {
	var size1 = document.getElementById("time").style;
	var size2 = document.getElementById("timer").style;
	var size3 = document.getElementById("stopwatch").style;
	var size4 = document.getElementById("dayOfWeek").style;

	if(size1.fontSize.length == 5) {
		var num = size1.fontSize.slice(0,3);
		num = 10 + +num;
		num = num + "px";

		size1.fontSize = num;
		size2.fontSize = num;
		size3.fontSize = num;
		size4.fontSize = num;
}
	else if(size1.fontSize.length == 4) {
		var num = size1.fontSize.slice(0,2);
		num = 10 + +num;
		num = num + "px";

		size1.fontSize = num;
		size2.fontSize = num;
		size3.fontSize = num;
		size4.fontSize = num;
	}
	else if(size1.fontSize.length == 3) {
		size1.fontSize = 10;
		size2.fontSize = 10;
		size3.fontSize = 10;
		size4.fontSize = 10;
	}
}

/**
	*  @name 
	*  @pre None
	*  @post The four elements are decreased in font size
	*  @return none
*/
function decreaseFont() {
	var size1 = document.getElementById("time").style;
	var size2 = document.getElementById("timer").style;
	var size3 = document.getElementById("stopwatch").style;
	var size4 = document.getElementById("dayOfWeek").style;

	if(size1.fontSize.length == 5) {
		var num = size1.fontSize.slice(0,3);
		num = - 10 + +num;
		num = num + "px";

		size1.fontSize = num;
		size2.fontSize = num;
		size3.fontSize = num;
		size4.fontSize = num;
	}
	else if(size1.fontSize.length == 4) {
		var num = size1.fontSize.slice(0,2);
		num = - 10 + +num;
		num = num + "px";

		size1.fontSize = num;
		size2.fontSize = num;
		size3.fontSize = num;
		size4.fontSize = num;
	}
}
