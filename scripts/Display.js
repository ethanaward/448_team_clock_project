var Display = function(){

	this.displayTime = function(timeArr){
		//concatonates  a string of the time with colons
		//displays it on the html page

		//build and display string
		document.getElementById("time").innerHTML = this.checkNumber(timeArr[0]) + ":" + 
													this.checkNumber(timeArr[1]) + ":" + 
													this.checkNumber(timeArr[2]);
	}

	this.displayFormat = function(){
		//TODO
		//if the format is 24h, dont display am/pm.
		//if the format is 12h, display am or pm after time string.
	}

	this.displayErrorMsg = function(){
		//TODO
		//prints error messages at designated tags for invalid input.
	}

	//Adds leading zero to number for clock display if less than 10
	this.checkNumber = function(number_to_check) {
		if( number_to_check < 10)
			number_to_check = "0" + number_to_check;

		return number_to_check
	}

};