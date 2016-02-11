//main driver for the webpage (must be last js file included)
function main(){
	c = new Clock();
	c.init();

	//calls the update method for the Clock object every second.
	var intervalID = window.setInterval(c.update, 1000);
};

//calls main when the script is seen by the js interpreter.
main();