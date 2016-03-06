var timeDate;
var stop = false;
var pause = false;

function MakeTimer() {

	var hours = document.getElementById("timer_hours").value;
	var min = document.getElementById("timer_mins").value;
	var sec = document.getElementById("timer_secs").value;

	stop = false;

	timeDate = new Date();
	startTime = (hours-18) * 3600000 + min * 60000 + sec * 1000;
	var originalDisplay = new Date(startTime);

	OutputTimer(originalDisplay);

	RunTimer();
}

function RunTimer() {

	var newDate = new Date();
	var newDiff = newDate.getTime() - timeDate.getTime();
	var newTime = startTime - newDiff;
	var newDisplay = new Date(newTime);

	if(!stop) {
		OutputTimer(newDisplay);
		setTimeout(RunTimer, 100);
	}

	else {
		startTime -= newDiff;
	}

}

function PauseTimer() {

	stop = true;
	pause = false;

}

function ResumeTimer() {

	if(stop && !pause) {
		stop = false;
		timeDate = new Date();
		RunTimer();

	}
}

function ResetTimer() {

	stop = true;
	pause = true;

	var hours = document.getElementById("timer_hours").value;
	var min = document.getElementById("timer_mins").value;
	var sec = document.getElementById("timer_secs").value;

	timeDate = new Date();

	startTime = (hours-18) * 3600000 + min * 60000 + sec * 1000;
	var originalDisplay = new Date(startTime);

	OutputTimer(originalDisplay);


}

function OutputTimer(countDate){

	var seconds = (countDate.getSeconds() < 10 ? "0" : "") + countDate.getSeconds();
	var minutes = (countDate.getMinutes() < 10 ? "0" : "") + countDate.getMinutes();
	var hours = (countDate.getHours() < 10 ? "0" : "") + countDate.getHours();

	var countDown = hours + ":" + minutes + ":" + seconds;

	document.getElementById("timer").innerHTML = countDown;
}
