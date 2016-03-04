var timeDate;
var flag;
var timeStamp;

function startWatch() {

	flag = true;
	timeDate = new Date();
	timeStamp = -64800000;

	//For some reason, a new Date(0) has 18 hours exactly, so I subtract those milliseconds off.
	var originalDisplay = new Date(timeStamp);

	OutputTimer(originalDisplay);

	RunWatch();
}

function RunWatch() {

	if(flag){
		var newDate = new Date();

		var countUp = newDate.getTime() - timeDate.getTime();
		var newDisplay = new Date(timeStamp + countUp);

		OutputTimer(newDisplay);
		setTimeout(RunWatch, 1000);
	}
	else{
		var timeStampDate = new Date();
		timeStamp += timeStampDate.getTime()-timeDate.getTime();
	}

}

function pauseWatch(){
	flag = false;
}

function resumeWatch(){
	flag = true;
	RunWatch();
}

function resetWatch(){
	flag = false;
	timeDate = new Date();
	timeStamp = -64800000;

	var originalDisplay = new Date(timeStamp);
	OutputTimer(originalDisplay);
}

function OutputTimer(countDate){

	var countDown = countDate.getHours() + ":" + countDate.getMinutes() + ":" + countDate.getSeconds();

	document.getElementById("stopwatch").innerHTML = countDown;
}
