var Timer = function(){
	//private data
	var sec_total = 0; //Default clock starts at 0:00
	var meridiem = "am"//whether the clock is in am/pm on 12h format.

	//methods
	this.setTime = function() {
		var h, m, s
	 
		h = document.getElementById("u_hour").value;
		m = document.getElementById("u_min").value;
		s = document.getElementById("u_sec").value;
	 
		sec_total = s*1 +m*60+h*60*60; //Turn time user entered into total seconds
	}

	this.addTime = function() {
		var h_remainder = sec_total%(60*60); //remainder seconds after dividing to get hours from sec_total
		var m_remainder = h_remainder%(60); //remainder seconds after dividing to get mins
	 
		var hour = (sec_total - h_remainder)/(60*60); //Get whole number of hours
		var min = (h_remainder-m_remainder)/60; //Get whole number of minutes
		var sec = m_remainder; //Get seconds
		
		sec_total += 1; //Increase time by 1 sec
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

