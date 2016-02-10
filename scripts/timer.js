/*document.getElementById("24H").checked = true; //Default is 24 hour format

var sec_total = 0; //Default clock starts at 0:00
 
function changeTime() {
	var h, m, s
 
	h = document.getElementById("u_hour").value;
	m = document.getElementById("u_min").value;
	s = document.getElementById("u_sec").value;
 
	sec_total = s*1 +m*60+h*60*60; //Turn time user entered into total seconds
 
}
 
window.setInterval(addTime, 1000); //Add and calculate time every sec
 
function addTime() {
	h_remainder = sec_total%(60*60); //remainder seconds after dividing to get hours from sec_total
	m_remainder = h_remainder%(60); //remainder seconds after dividing to get mins
 
	var hour = (sec_total - h_remainder)/(60*60); //Get whole number of hours
	var min = (h_remainder-m_remainder)/60; //Get whole number of minutes
	var sec = m_remainder; //Get seconds
	document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec; //Create time to display

	sec_total += 1; //Increase time by 1 sec
}
*/

var timer = function(){
	//private data
	var sec_total = 0; //Default clock starts at 0:00

	//methods
	this.changeTime = function() {
		var h, m, s
	 
		h = document.getElementById("u_hour").value;
		m = document.getElementById("u_min").value;
		s = document.getElementById("u_sec").value;
	 
		sec_total = s*1 +m*60+h*60*60; //Turn time user entered into total seconds
	}

	this.addTime = function() {
		var h_remainder = sec_total%(60*60); //remainder seconds after dividing to get hours from sec_total
		var m_remainder = h_remainder%(60); //remainder seconds after dividing to get mins
	 
		var hour = (sec_total - h_remainder)/(60*60); //Get whole number of hours
		var min = (h_remainder-m_remainder)/60; //Get whole number of minutes
		var sec = m_remainder; //Get seconds
		
		document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec; //Create time to display

		sec_total += 1; //Increase time by 1 sec
	}	

};

/*
//time object instantiation.
t1 = new timer(12, 01, 00, 12);

//execution of the clock.
function runClock(){
	t1.addTime();
}

var intervalID = window.setInterval(runClock, 1000);
*/

