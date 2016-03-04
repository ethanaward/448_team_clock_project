function display(num) {

		var clock = document.getElementById('clock_display');
		var timer = document.getElementById('timer_display');
		var stopwatch = document.getElementById('stopwatch_display');

		var clock_form = document.getElementById('edit_time_div');
		var timer_form = document.getElementById('edit_timer');
		var stopwatch_form = document.getElementById('edit_stopwatch');	

		clock.style.display = 'none';
		stopwatch.style.display = 'none';
		timer.style.display = 'none';

		clock_form.style.display = 'none';
		timer_form.style.display = 'none';
		stopwatch_form.style.display = 'none';

	if(num==0){
		clock.style.display = 'block';
		clock_form.style.display = 'block';
	}
	if(num==1){
		timer.style.display = 'block';
		timer_form.style.display = 'block';
	}
	if(num==2){
		stopwatch.style.display = 'block';
		stopwatch_form.style.display = 'block';
	}
	
}
