var InputValidator = function(){

	//Toggles the visibility of the edit_time_div and the text on the button.
	this.toggleTimeMenu = function(){
		var div = document.getElementById('edit_time_div');
	    if (div.hidden !== true) {
	        div.hidden = true;
	    }
	    else {
	        div.hidden = false;
	    }
	}


	this.setTime = function(timerObj){
		//validates the input is good with given format.
		//passes valid input to timer obj t.
		//if input is invalid, send message to display.

		//TODO are these needed? 
		document.getElementById("edit_time_tgl_btn").hidden = false;
		document.getElementById('edit_time_div').hidden = true;

		var h = document.getElementById("input_hours").value;
		var m = document.getElementById("input_minutes").value;
		var s = document.getElementById("input_seconds").value;

		if((s<60) && (m<60) && (h<24))
	 	{	
	 		//input was valid so set the time in the timer object.
	 		timerObj.setTime(h, m, s);
	 	}
	 	else
	 	{	
	 		//TODO use the display object to output errors
	 		alert("invalid input"); //Add more error handle
	 	}
	}
};
