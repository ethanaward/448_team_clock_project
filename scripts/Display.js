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
		document.getElementById("time").innerHTML = this.checkNumber(timeArr[0]) + ":" + 
													this.checkNumber(timeArr[1]) + ":" + 
													this.checkNumber(timeArr[2]) + " " +
													timeArr[3];
	}

	/**
	 * Writes error messages when the edit time input is invalid.
	 */
	this.displayErrorMsg = function(){
		//TODO
		//prints error messages at designated tags for invalid input.
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

		return number_to_check
	}
	
	/**
	 * Clears the input fields of the html form for time entry.
	 */
	this.clearInput = function(){
		document.getElementById("input_hours"  ).value = "";
		document.getElementById("input_minutes").value = "";
		document.getElementById("input_seconds").value = "";	
	}

};