var timeDate;
var flag;
var timeStamp;

function startWatch() {
	
	flag = true;
	timeDate = new Date();
	
	//for some reason a new Date(0) has 18 hours exactly, so I subtract those milliseconds off.
	var originalDisplay = new Date(-64800000);

	OutputTimer(originalDisplay);

	RunWatch(0);
}

function RunWatch(startTime) {

	if(flag){
		var newDate = new Date();
		var countUp = newDate.getTime() - timeDate.getTime() + startTime;
		var newDisplay = new Date(countUp-64800000);

		OutputTimer(newDisplay);
		setTimeout(RunWatch, 1000);
	}
	else{
		var timeStampDate = new Date();
		timeStamp = timeStampDate.getTime()-timeDate-getTime();
	}
}

function pauseWatch(){
	flag = false;
}
function resumeWatch(){
	flag = true;
	RunWatch(timeStamp);
}
function resetWatch(){

}


function OutputTimer(countDate){

	var countDown = countDate.getHours() + ":" + countDate.getMinutes() + ":" + countDate.getSeconds();

	document.getElementById("stopwatch").innerHTML = countDown;
}
