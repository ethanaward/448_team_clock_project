/**
*	@file : stopwatch.js
*	@author : Mike Neises
*	@date : 2016.03.06
*	@brief: Displays user interface for starting, pausing, resume, and reseting a seconds counter.
*/

var todayDate;
var flag = true;
var timeStamp;
var resume = false;

/**
        *  @name startWatch
	*  @pre none
	*  @post The stopwatch is initialized at 0, and it calls RunWatch
	*  @return none
*/
function startWatch() {

	flag = true;
	todayDate = new Date();
	timeStamp = -64800000;

	//For some reason, a new Date(0) has 18 hours exactly, so I subtract those milliseconds off.
	var originalDisplay = new Date(timeStamp);

	OutputWatch(originalDisplay);

	RunWatch();
}

/**
        *  @name RunWatch
	*  @pre A timestamp exists
	*  @post The stopwatch is incremented by 1 second every second, until a flag is thrown
	*  @return None
*/
function RunWatch() {

	var newDate = new Date();
	var countUp = newDate.getTime() - todayDate.getTime();
	var newDisplay = new Date(timeStamp + countUp);

	if(flag){
		OutputWatch(newDisplay);
		setTimeout(RunWatch, 100);
	}
	else{
		timeStamp += countUp;
	}
}

/**
        *  @name pauseWatch
	*  @pre None
	*  @post A flag is thrown
	*  @return None
*/
function pauseWatch(){
	flag = false;
	resume = true;
}

/**
        *  @name resumeWatch
	*  @pre The stopwatch was paused
	*  @post The stopwatch begins ticking again
	*  @return None
*/
function resumeWatch(){
	if(!flag && resume){
		flag = true;
		todayDate = new Date();
		RunWatch();
	}
}

/**
        *  @name resetWatch
	*  @pre None
	*  @post The stopwatch is set to 0, and it does not tick up because a flag is thrown.
	*  @return None
*/
function resetWatch(){
	flag = false;
	resume = false;
	todayDate = new Date();
	timeStamp = -64800000;

	var originalDisplay = new Date(timeStamp);
	OutputWatch(originalDisplay);
}

/**
        *  @name OutputWatch
	*  @pre RunWatch has been run already
	*  @post The output of the running stopwatch is displayed
	*  @return None
*/
function OutputWatch(countDate){

	var seconds = (countDate.getSeconds() < 10 ? "0" : "") + countDate.getSeconds();
	var minutes = (countDate.getMinutes() < 10 ? "0" : "") + countDate.getMinutes();
	var hours = (countDate.getHours() < 10 ? "0" : "") + countDate.getHours();


	var countDown = hours + ":" + minutes + ":" + seconds;

	document.getElementById("stopwatch").innerHTML = countDown;
}
