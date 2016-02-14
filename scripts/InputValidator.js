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
		var strmsg = "";

		if(isNaN(s)==true||s<0||s>59||s%1!=0) //If sec is not a whole number from 0 to 59
		{
			
			strmsg += "Invalid seconds, must be integer between 0 and 59";
		}
		if(isNaN(m)==true||m<0||m>59||m%1!=0) //If min is not a whole number from 0 to 59
		{
			strmsg += "\nInvalid minutes, must be integer between 0 and 59"; 
		}
		if((document.getElementById("u_24H").checked == true)&&(isNaN(h)==true||h<0||h>23||h%1!=0)) //If hour is not a whole number from 0 to 23 for 24 hour format
		{
			strmsg += "\nInvalid hours, must be integer between 0 and 23";
		}
		else if((document.getElementById("u_24H").checked == false)&&(isNaN(h)==true||h<1||h>12||h%1!=0)) //If hour is not a whole number from 1 to 12 for 12 hour format
		{
			strmsg += "\nInvalid hours, must be integer between 1 and 12";
		}		

		else 
	 	{	if(m>=0 && m<60 && isNaN(m)==false && m%1==0 && s>=0 && s<60 && isNaN(s)==false && s%1==0) // necessary
			{
	 			//input was valid so set the time in the timer object.
				if(document.getElementById("pm").checked == true)
				{
					timerObj.setFormat(12); //Tell addTime to use am/pm
					document.getElementById("12H").checked = true; //Check 12 hour format button
					if(h!=12) //Add 12 hours to sec_total for pm unless 12 pm
					{
						h=h*1+12; //*1 is so it won't concatenate
					}
				}
				else if(document.getElementById("am").checked == true)
				{
					timerObj.setFormat(12); //Tell addTime to use am/pm
					document.getElementById("12H").checked = true; //Check 12 hour format button
					if(h==12) //Change hours to 0 if 12 am
					{
						h = 0;
					}
				}
				else
				{
					timerObj.setFormat(24); //Tell addTime to use 24 hour
					document.getElementById("24H").checked = true; //Check 24 hour format button
				}
	 			timerObj.setTime(h, m, s);
			}
	 	}
		if(strmsg.length > 0)
		{
			window.alert(strmsg);
		}
	}
};
