clock();

get_time();


function setTime() {
	var newTime = prompt("Enter time (in 00:00 format)");
	document.getElementById("display").innerHTML = newTime;
}
