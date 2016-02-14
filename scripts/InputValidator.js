/**
 * InputValidator.js
 *
 * Creates an instance of InputValidator.
 *
 * @constructor
 */
var InputValidator = function(){

	/**
	 * Toggles the visibility of the edit_time_div and the text on the button.
	 */
	this.toggleTimeMenu = function(){
		var div = document.getElementById('edit_time_div');
	    if (div.hidden !== true) {
	        div.hidden = true;
	    }
	    else {
	        div.hidden = false;
	    }
	}

	/**
	 * Checks the validity of the input.
	 * It passes valid input to the Timer timerObj,
	 * or displays a message if the input is invalid.
	 * 
	 * @param {Timer} timerObj An instance of the Timer class
	 * that sets the time and keeps track of it.
	 */ 
	this.setTime = function(timerObj){
		

		//TODO are these needed? 
		document.getElementById("edit_time_tgl_btn").hidden = false;
		document.getElementById('edit_time_div').hidden = true;

		var h = document.getElementById("input_hours").value;
		var m = document.getElementById("input_minutes").value;
		var s = document.getElementById("input_seconds").value;

		if((s<60) && (m<60) && (h<24))
	 	{	
	 		//input was valid so set the time in the timer object.
			if(document.getElementById("pm").checked == true)
			{
				timerObj.setFormat(12); //Tell addTime to use am/pm
				if(h!=12) //Add 12 hours to sec_total for pm unless 12 pm
				{
					h=h*1+12; //*1 is so it won't concatenate
				}
			}
			else if(document.getElementById("am").checked == true)
			{
				timerObj.setFormat(12); //Tell addTime to use am/pm
				if(h==12) //Change hours to 0 if 12 am
				{
					h = 0;
				}
			}
			else
			{
				timerObj.setFormat(24); //Tell addTime to use 24 hour
			}
	 		timerObj.setTime(h, m, s);
	 	}
	 	else
	 	{	
	 		//TODO use the display object to output errors
	 		alert("invalid input"); //Add more error handle
	 	}
	}
};
