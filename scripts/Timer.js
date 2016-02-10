var Timer = function(pHours, pMin, pSec, pFormat){
	//private data
	var hour = pHours;
	var min = pMin;
	var sec = pSec;
	var format = pFormat;
	var sec_total = 0; //Default clock starts at 0:00
	var meridiem = "am"//whether the clock is in am/pm on 12h format.

	//methods
	this.setTime = function(pHour, pMin, pSec) {
		hour = pHour;//document.getElementById("u_hour").value;
		min = pMin;//document.getElementById("u_min").value;
		sec = pSec;//document.getElementById("u_sec").value;

		//calculate the total seconds
	 	sec_total = sec*1 +min*60+hour*60*60; //Turn time user entered into total seconds

	}

	this.addTime = function() {
		var h_remainder = sec_total%(60*60); //remainder seconds after dividing to get hours from sec_total
		var m_remainder = h_remainder%(60); //remainder seconds after dividing to get mins
	 
		hour = (sec_total - h_remainder)/(60*60); //Get whole number of hours
		min = (h_remainder-m_remainder)/60; //Get whole number of minutes
		sec = m_remainder; //Get seconds

		sec_total += 1; //Increase time by 1 sec
		
		//restart clock if next day.
		if(sec_total < 86400 -1) // make clock restart at 24:00 hr -- instead of displaying 24:00 show 0:00
	 	{
	 		sec_total += 1; //Increase time by 1 sec
	 	}
	 	else 
	 		sec_total = 0;
	}	

	this.setFormat = function(){
		//TODO
		//changes the format and re-calculates the output time.
	}

	this.getFormat = function(){
		//TODO
		//returns format for i and display to use
	}

	this.getTime = function(){
		//TODO
		//returns the hour, min, sec
		//for the display to make into a string and display
	}

	//TODO probably add get/set methods for extra private data
	//hours, minutes, seconds, format.

};

