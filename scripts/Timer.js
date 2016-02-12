/**
 * Creates an instance of Timer.
 *
 * @constructor
 * @param {number} pHours The current number of hours.
 * @param {number} pMin The current number of minutes.
 * @param {number} pSec The current number of seconds.
 * @param {number} pFormat The format of the clock (12/24 hours).
 */
var Timer = function(pHours, pMin, pSec, pFormat){
	//private data
	var hour = pHours;
	var min = pMin;
	var sec = pSec;
	var format = pFormat;
	var sec_total = 0; //Default clock starts at 0:00
	var meridiem = "AM"//whether the clock is in am/pm on 12h format.

	//methods---------------------------------------------------------
	this.addTime = function() {
		var h_remainder = sec_total%(60*60); //remainder seconds after dividing to get hours from sec_total
		var m_remainder = h_remainder%(60); //remainder seconds after dividing to get mins
	 
		hour = (sec_total - h_remainder)/(60*60); //Get whole number of hours
		min = (h_remainder-m_remainder)/60; //Get whole number of minutes
		sec = m_remainder; //Get seconds
		
		//time increment logic
		if(sec_total < 86400 -1) // make clock restart at 24:00 hr -- instead of displaying 24:00 show 0:00
	 	{
	 		sec_total += 1; //Increase time by 1 sec
	 	}
	 	else 
	 		sec_total = 0;
	}

	this.init = function(){
		//calculate total seconds before addTime() resets it to 0 before first time increment.
		sec_total = hour*(60*60) + min*(60) + sec;
	}

	this.setTime = function(pHour, pMin, pSec) {
		hour = pHour;
		min = pMin;
		sec = pSec;

		//calculate the total seconds
	 	sec_total = sec*1 +min*60+hour*60*60; //Turn time user entered into total seconds
	}

	this.getTime = function(){
		//pack the time data into an array for processing in the display object.
		return [hour, min, sec, meridiem]
	}

	this.setFormat = function(pFormat){
		format = pFormat;

		//meridiem will not show in concatonated time string if in 24 hour format.
		if(format == 24){
			meridiem = "";
		}
		//TODO
		//re-calculate the output time?
	}

	this.getFormat = function(){
		//TODO
		//returns format for i and display to use
	}

	//TODO probably add get/set methods for meridiem
};

