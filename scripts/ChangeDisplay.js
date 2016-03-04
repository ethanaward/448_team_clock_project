function display_timer() {

		var clock = document.getElementById('clock_display');
		var stopwatch = document.getElementById('stopwatch_display');
		var timer = document.getElementById('timer_display');

		var clock_form = document.getElementById('edit_time_div');
		var timer_form = document.getElementById('edit_timer');
		var stopwatch_form = document.getElementById('edit_stopwatch');

		clock.style.display = 'none';
		stopwatch.style.display = 'none';
		timer.style.display = 'block';

		clock_form.style.display = 'none';
		timer_form.style.display = 'block';
		stopwatch_form.style.display = 'none';
		
		
	
	}

	function display_clock() {

		var clock = document.getElementById('clock_display');
		var stopwatch = document.getElementById('stopwatch_display');
		var timer = document.getElementById('timer_display');

		var clock_form = document.getElementById('edit_time_div');
		var timer_form = document.getElementById('edit_timer');
		var stopwatch_form = document.getElementById('edit_stopwatch');

		clock.style.display = 'block';
		stopwatch.style.display = 'none';
		timer.style.display = 'none';

		clock_form.style.display = 'block';
		timer_form.style.display = 'none';
		stopwatch_form.style.display = 'none';
		
	}

	function display_stopwatch() {

		var clock = document.getElementById('clock_display');
		var stopwatch = document.getElementById('stopwatch_display');
		var timer = document.getElementById('timer_display');


		var clock_form = document.getElementById('edit_time_div');
		var timer_form = document.getElementById('edit_timer');
		var stopwatch_form = document.getElementById('edit_stopwatch');

		clock.style.display = 'none';
		stopwatch.style.display = 'block';
		timer.style.display = 'none';

		clock_form.style.display = 'none';
		timer_form.style.display = 'none';
		stopwatch_form.style.display = 'block';
		
	
	}

