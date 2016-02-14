/**
 * main.js
 *
 * Main driver for the webpage.
 * It reates a new instance of clock,
 * initializes the clock instance, and calls the 
 * Clocks update method to update the clock every second. 
 */ 
function main(){
	c = new Clock();
	c.init();

	//calls the update method for the Clock object every second.
	var intervalID = window.setInterval(c.update, 1000);
};

//calls main when the script is interpreted.
main();