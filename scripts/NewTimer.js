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

	//It works exactly as it did before right now.
	//Insert formatting stuff here!

	var countDown = countDate.getHours() + ":" + countDate.getMinutes() + ":" + countDate.getSeconds();

	document.getElementById("timer").innerHTML = countDown;
}
