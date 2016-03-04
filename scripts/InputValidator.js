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
		if (div.style.display != 'none') {
			div.style.display = 'none';
			document.getElementById('edit_time_tgl_btn').style.display = 'block';
	    }
	    else {
			div.style.display = 'block';	
			document.getElementById('edit_time_tgl_btn').style.display = 'none';
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
		document.getElementById('edit_time_div').style.display = 'none';
		document.getElementById("editTimeButton").style.display = 'block';
		document.getElementById("edit_time_tgl_btn").style.display = 'inline';

		var mo = document.getElementById("input_month").value;
		var d = document.getElementById("input_day").value;
		var h = document.getElementById("input_hours").value;
		var m = document.getElementById("input_minutes").value;
		var s = document.getElementById("input_seconds").value;
		var strmsg = "";
		var monthtype = 0;
		if(isNaN(mo)==true||mo<1||mo>12||mo%1!=0 || mo =="") //If months is not a whole number from 1 to 12
		{
			strmsg += "\nInvalid months, must be integer between 1 and 12"; 
		}
		else if(mo == 1 || mo == 3 || mo == 5 || mo == 7 || mo == 8 || mo == 10 || mo == 12)
		{
			monthtype = 31;
		}
		else if(mo == 2)
		{
			monthtype = 29;
		}
		else if(mo == 4 || mo == 6 || mo == 9 || mo == 11)
		{
			monthtype = 30;
		}

		if(monthtype == 31) //if the month has 31 days
		{
			if(isNaN(d)==true||d<1||d>31||d%1!=0 || d =="") //If days is not a whole number from 1 to 31
			{
				strmsg += "\nInvalid days, must be integer between 1 and 31"; 
			}
		}
		else if(monthtype == 29) //if the month has 29 days
		{
			if(isNaN(d)==true||d<1||d>29||d%1!=0 || d =="") //If days is not a whole number from 1 to 29
			{
				strmsg += "\nInvalid days, must be integer between 1 and 29"; 
			}
		}
		else if(monthtype == 30) //if the month has 30 days
		{
			if(isNaN(d)==true||d<1||d>30||d%1!=0 || d =="") //If days is not a whole number from 1 to 30
			{
				strmsg += "\nInvalid days, must be integer between 1 and 30"; 
			}
		}
		else
		{
			if(isNaN(d)==true||d<1||d>31||d%1!=0 || d =="") //If days is not a whole number from 1 to 31
			{
				strmsg += "\nInvalid days, must be integer between 1 and 31"; 
			}
		}

		if(isNaN(s)==true||s<0||s>59||s%1!=0) //If sec is not a whole number from 0 to 59
		{
			strmsg += "\nInvalid seconds, must be integer between 0 and 59";
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
	 	{	if(m>=0 && m<60 && isNaN(m)==false && m%1==0 && s>=0 && s<60 && isNaN(s)==false && s%1==0 && isNaN(mo)==false && mo%1==0 && mo != "" && mo>0 && mo <13 && isNaN(d)==false && d%1==0 && d!="" && d>0 && d<32) // necessary
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
	 			timerObj.setTime(mo, d, h, m, s);
			}
	 	}
		if(strmsg.length > 0)
		{
			window.alert(strmsg);
		}
	}
};
