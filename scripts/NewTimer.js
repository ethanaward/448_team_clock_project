var timeDate;

function MakeTimer(pHours, pMin, pSec) {

	var curDate = new Date();
	timeDate = new Date (2016, 3, 3, curDate.getHours() + pHours, curDate.getMinutes() + pMin, curDate.getSeconds() + pSec);
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

