/**
 * Display.js
 *
 * Creates an instance of Display.
 *
 * @constructor
 */
var Display = function(){

	/**
	 * Concatenates a string of the time with colons
	 * and displays it on the html page "time" id.
	 *
	 * @this {Display}
	 * @param {array} timeArr An array packed with data from 
	 * the Timer class with indicies [hour, min, sec, meridiem].
	 */
	this.displayTime = function(timeArr){
		var daysPassed = 0;
		var weekDay = 0;
		var week = ["Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"]

		document.getElementById("time").innerHTML = this.checkNumber(timeArr[4]) + "/" + this.checkNumber(timeArr[5]) + " " + this.checkNumber(timeArr[0]) + ":" + this.checkNumber(timeArr[1]) + ":" + this.checkNumber(timeArr[2]) + " " + timeArr[3];


		if(timeArr[4] == 1){
			daysPassed = Number(timeArr[5]);
		}
		else if(timeArr[4] == 2){
			daysPassed = Number(timeArr[5]) + 31;
		}
		else if(timeArr[4] == 3){
			daysPassed = Number(timeArr[5]) + 60;
		}
		else if(timeArr[4] == 4){
			daysPassed = Number(timeArr[5]) + 91;
		}
		else if(timeArr[4] == 5){
			daysPassed = Number(timeArr[5]) + 121;
		}
		else if(timeArr[4] == 6){
			daysPassed = Number(timeArr[5]) + 152;
		}
		else if(timeArr[4] == 7){
			daysPassed = Number(timeArr[5]) + 182;
		}
		else if(timeArr[4] == 8){
			daysPassed = Number(timeArr[5]) + 213;
		}
		else if(timeArr[4] == 9){
			daysPassed = Number(timeArr[5]) + 244;
		}
		else if(timeArr[4] == 10){
			daysPassed = Number(timeArr[5]) + 274;
		}
		else if(timeArr[4] == 11){
			daysPassed = Number(timeArr[5]) + 305;
		}
		else if(timeArr[4] == 12){
			daysPassed = Number(timeArr[5]) + 335;
		}

		weekDay = daysPassed % 7;


		document.getElementById("dayOfWeek").innerHTML = week[weekDay];
	
	}

	/**
	 * Pads the number with a 0 on the left hand side if it is a single digit.
	 *
	 * @param {number} number_to_check The digit to pad.
	 * @return {string} The padded number.
	 */
	this.checkNumber = function(number_to_check) {
		if( number_to_check < 10)
			number_to_check = "0" + number_to_check;

		return number_to_check;
	}
	
	/**
	 * Clears the input fields of the html form for time entry.
	 */
	this.clearInput = function(){
		document.getElementById("input_month"  ).value = "";
		document.getElementById("input_day"    ).value = "";
		document.getElementById("input_hours"  ).value = "";
		document.getElementById("input_minutes").value = "";
		document.getElementById("input_seconds").value = "";	
	}

};
