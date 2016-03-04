var timeDate;

function MakeTimer() {

	var hours = document.getElementById("timer_hours").value;
	var min = document.getElementById("timer_mins").value;
	var sec = document.getElementById("timer_secs").value;

	timeDate = new Date();
	startTime = (hours-18) * 3600000 + min * 60000 + sec * 1000;
	var originalDisplay = new Date(startTime);

	OutputTimer(originalDisplay);

	window.setInterval(RunTimer, 1000);
}

function RunTimer() {
	var newDate = new Date();
	var newDiff = newDate.getTime() - timeDate.getTime();
	var newTime = startTime - newDiff;
	var newDisplay = new Date(newTime);

	OutputTimer(newDisplay);
}

function OutputTimer(countDate){

	var seconds = (countDate.getSeconds() < 10 ? "0" : "") + countDate.getSeconds();
	var minutes = (countDate.getMinutes() < 10 ? "0" : "") + countDate.getMinutes();
	var hours = (countDate.getHours() < 10 ? "0" : "") + countDate.getHours();

	var countDown = hours + ":" + minutes + ":" + seconds;

	document.getElementById("timer").innerHTML = countDown;
}
