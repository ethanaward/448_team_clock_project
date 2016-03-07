/**
*	@file : NewTimer.js
*	@author : Travis Augustine, Ethan Ward, Mike Neises
*	@date : 2016.03.06
*	@brief: Displays user interface for starting, pausing, resume, and reseting a seconds timer.
*/

var timeDate;
var stop = false;
var pause = false;
var daysOver = 0;

/**
	*  @name MakeTimer
	*  @pre None
	*  @post The timer is initialized at input time, and it calls runTimer
	*  @return None
*/
function MakeTimer() {

	var hours = document.getElementById("timer_hours").value;
	var min = document.getElementById("timer_mins").value;
	var sec = document.getElementById("timer_secs").value;

	

	if(isNaN(hours) || hours%1!=0 || hours=="")
	{
		alert("invalid hours");
	}
	else if(isNaN(min) || min%1!=0 || min =="")
	{
		alert("invalid minutes");
	}
	else if(isNaN(sec) || sec%1!=0 || sec == "")
	{
		alert("invalid seconds");
	}
	else{
	daysOver = (hours - (hours % 24))/24;

	stop = false;

	timeDate = new Date();
	startTime = (hours-18) * 3600000 + min * 60000 + sec * 1000;
	var originalDisplay = new Date(startTime);

	OutputTimer(originalDisplay);

	RunTimer();
	}
}

/**
	*  @name RunTimer
	*  @pre MakeTimer has been run first
	*  @post The timer is incremented down by 1 second every second
	*  @return None
*/
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

/**
	*  @name PauseTimer
	*  @pre None
	*  @post A stop flag is thrown
	*  @return None
*/
function PauseTimer() {

	stop = true;
	pause = false;

}

/**
	*  @name ResumeTimer
	*  @pre The timer was paused
	*  @post The timer continues
	*  @return None
*/
function ResumeTimer() {

	if(stop && !pause) {
		stop = false;
		timeDate = new Date();
		RunTimer();

	}
}

/**
	*  @name ResetTimer
	*  @pre 
	*  @post 
	*  @return None
*/
function ResetTimer() {

	stop = true;
	pause = true;

	var hours = document.getElementById("timer_hours").value;
	var min = document.getElementById("timer_mins").value;
	var sec = document.getElementById("timer_secs").value;

	if(isNaN(hours) || hours%1!=0 || hours=="")
	{
		alert("invalid hours");
	}
	else if(isNaN(min) || min%1!=0 || min =="")
	{
		alert("invalid minutes");
	}
	else if(isNaN(sec) || sec%1!=0 || sec == "")
	{
		alert("invalid seconds");
	}
	else{
	timeDate = new Date();

	startTime = (hours-18) * 3600000 + min * 60000 + sec * 1000;
	var originalDisplay = new Date(startTime);

	OutputTimer(originalDisplay);
	}

}

/**
	*  @name OutputTimer
	*  @pre None
	*  @post The timer is reset to inputs, and does not begin counting, because a flag is thrown.
	*  @return None
*/
function OutputTimer(countDate){

	var seconds = (countDate.getSeconds() < 10 ? "0" : "") + countDate.getSeconds();
	var minutes = (countDate.getMinutes() < 10 ? "0" : "") + countDate.getMinutes();
	var hours = ((countDate.getHours()+24*daysOver) < 10 ? "0" : "") + (countDate.getHours()+24*daysOver);

	var countDown = hours + ":" + minutes + ":" + seconds;

	if(seconds==0&&minutes==0&&hours==0){
		stop = true;
		document.getElementById("timer").innerHTML = countDown;
		alert("Timer is finished!");
	}

	document.getElementById("timer").innerHTML = countDown;
}
