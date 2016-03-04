var todayDate;
var flag = true;
var timeStamp;
var resume = false;

function startWatch() {

	flag = true;
	todayDate = new Date();
	timeStamp = -64800000;

	//For some reason, a new Date(0) has 18 hours exactly, so I subtract those milliseconds off.
	var originalDisplay = new Date(timeStamp);

	OutputWatch(originalDisplay);

	RunWatch();
}

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

function pauseWatch(){
	flag = false;
	resume = true;
}

function resumeWatch(){
	if(!flag && resume){
		flag = true;
		todayDate = new Date();
		RunWatch();
	}
}

function resetWatch(){
	flag = false;
	resume = false;
	todayDate = new Date();
	timeStamp = -64800000;

	var originalDisplay = new Date(timeStamp);
	OutputWatch(originalDisplay);
}

function OutputWatch(countDate){

	var seconds = (countDate.getSeconds() < 10 ? "0" : "") + countDate.getSeconds();
	var minutes = (countDate.getMinutes() < 10 ? "0" : "") + countDate.getMinutes();
	var hours = (countDate.getHours() < 10 ? "0" : "") + countDate.getHours();


	var countDown = hours + ":" + minutes + ":" + seconds;

	document.getElementById("stopwatch").innerHTML = countDown;
}
