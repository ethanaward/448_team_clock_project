//Basic interface for the display using a popup prompt.

function setTime() {
	var newTime = prompt("Enter time (in 00:00 format)");
	document.getElementById("display").innerHTML = newTime;
}
