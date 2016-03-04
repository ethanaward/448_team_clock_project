var timeDate;

function MakeTimer() {

	var hours = document.getElementById("timer_hours").value;
	var min = document.getElementById("timer_mins").value;
	var sec = document.getElementById("timer_secs").value;
	alert(hours);

	var curDate = new Date();
	timeDate = new Date (2016, 3, 3, curDate.getHours() + hours, curDate.getMinutes() + min, curDate.getSeconds() + sec);
	var diff = timeDate - curDate;
	document.getElementById("timer_display").firstChild.nodeValue = diff;
	window.setInterval(RunTimer, 1000);
	
}

function RunTimer() {
	var newDate = new Date();
	var newDiff = timeDate - newDate;
	// alert(newDiff);
	document.getElementById("timer_display").firstChild.nodeValue = newDiff;
	


}

