var timeDate;

function MakeTimer() {

	var hours = document.getElementById("timer_hours").value;
	var min = document.getElementById("timer_mins").value;
	var sec = document.getElementById("timer_secs").value;
	// alert(hours);

	var curDate = new Date();
	timeDate = new Date (2016, 3, 3, curDate.getHours() + hours, curDate.getMinutes() + min, curDate.getSeconds() + sec);
	var diff = timeDate - curDate;
	var test = new Date(diff);
	var display = test.getHours() + ":" + test.getMinutes() + ":" + test.getSeconds();
	document.getElementById("timer_display").firstChild.nodeValue = display;
	window.setInterval(RunTimer, 1000);
	
}

function RunTimer() {
	var newDate = new Date();
	var newDiff = timeDate - newDate;
	// alert(newDiff);
	var test2 = new Date(newDiff);
	var display2 = test2.getHours() + ":" + test2.getMinutes() + ":" + test2.getSeconds();
	document.getElementById("timer_display").firstChild.nodeValue = display2;
	


}

