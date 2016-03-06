/**
*	@file : ChangeDisplay.js
*	@author : Mike Neises, Travis Augustine, Ethan Ward, Group 13
*	@date : 2016.03.06
*	@brief: Changes the display so that the user can interact with the different features.
*/

var previousDisplay = 0;
var visible = true;
var prevVisible = true;


/**
	*  @name display
	*  @pre None
	*  @post The display is changed based on the input parameter. All elements are hidden, and then some may be shown back again.
	*  @return None
*/
function display(num) {

		var clock = document.getElementById('clock_display');
		var timer = document.getElementById('timer_display');
		var stopwatch = document.getElementById('stopwatch_display');

		var clock_form = document.getElementById('edit_time_div');
		var timer_form = document.getElementById('edit_timer');
		var stopwatch_form = document.getElementById('edit_stopwatch');	

		var editButtonDiv = document.getElementById('editTimeButton');
		var editButton = document.getElementById('edit_time_tgl_btn');

		if(clock.style.display == 'block')
		{
			previousDisplay = 0;
		}
		else if(timer.style.display == 'block')
		{
			previousDisplay = 1;
		}
		else if(stopwatch.style.display == 'block')
		{
			previousDisplay = 2;
		}

		clock.style.display = 'none';
		stopwatch.style.display = 'none';
		timer.style.display = 'none';

		clock_form.style.display = 'none';
		editTimeButton.style.display = 'none';
		timer_form.style.display = 'none';

		stopwatch_form.style.display = 'none';
	
		visible = false;

	if(num==0){
		visible = true;
		if(editButton.style.display=='none'){
			clock.style.display = 'block';
			clock_form.style.display = 'block';
		}
		else{
			clock.style.display = 'block';
			editButtonDiv.style.display = 'block';
		}
		document.getElementById('font_hide').value = "Hide Display";
	}
	if(num==1){
		visible = true;
		timer.style.display = 'block';
		timer_form.style.display = 'block';
		document.getElementById('font_hide').value = "Hide Display";
	}
	if(num==2){
		visible = true;
		stopwatch.style.display = 'block';
		stopwatch_form.style.display = 'block';
		document.getElementById('font_hide').value = "Hide Display";
	}
	if(num==3){
		document.getElementById('font_hide').value = "Show Display";
		if(!visible && !prevVisible){
			display(previousDisplay);
			document.getElementById('font_hide').value = "Hide Display";
		}

	}
	prevVisible = visible;
}
