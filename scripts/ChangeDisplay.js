function display(num) {

		var clock = document.getElementById('clock_display');
		var timer = document.getElementById('timer_display');
		var stopwatch = document.getElementById('stopwatch_display');

		var clock_form = document.getElementById('edit_time_div');
		var timer_form = document.getElementById('edit_timer');
		var stopwatch_form = document.getElementById('edit_stopwatch');	

		var editButtonDiv = document.getElementById('editTimeButton');
		var editButton = document.getElementById('edit_time_tgl_btn');

		clock.style.display = 'none';
		stopwatch.style.display = 'none';
		timer.style.display = 'none';

		clock_form.style.display = 'none';
		editTimeButton.style.display = 'none';
		timer_form.style.display = 'none';

		stopwatch_form.style.display = 'none';

	if(num==0){
		if(editButton.style.display=='none'){
			clock.style.display = 'block';
			clock_form.style.display = 'block';
		}
		else{
			clock.style.display = 'block';
			editButtonDiv.style.display = 'block';
		}
	}
	if(num==1){
		timer.style.display = 'block';
		timer_form.style.display = 'block';
	}
	if(num==2){
		stopwatch.style.display = 'block';
		stopwatch_form.style.display = 'block';
	}
	if(num==3){
		if(clock.style.display == 'block')
		{
			clock.style.display == 'none';
		}
		if(timer.style.display == 'block')
		{
			timer.style.display == 'none';
		}
		if(stopwatch.style.display == 'block')
		{
			stopwatch.style.display == 'none';
		}
	}
	
}
