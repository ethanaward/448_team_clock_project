/**
 * Clock.js
 *
 * Creates an instance of Clock.
 *
 * @constructor
 * @property {InputValidator} input The object that handles 
 * input and validation for the clock.
 * @property {Display} display The object that handles output for the clock.
 * @property {Timer} time The object that handles keeping and 
 * updating time for the clock.
 */
var Clock = function(){
	//private data
	var input = new InputValidator();
	var display = new Display();
	var time = new Timer(0, 0, 0, 12);

	//methods------------------------------------------
	/**
	 * Initializes Clock object.
	 */ 
	this.init = function(){
		time.init();
	}

	/**
	 * Increments the time by 1 second and displays it.
	 */ 
	this.update = function(){
		time.addTime();
		display.displayTime(time.getTime());
	}

	/**
	 * Toggles the edit time menu displaying.
	 */
	this.toggleTimeMenu = function(){
		input.toggleTimeMenu();
	}

	/**
	 * Validates the input received for the time by calling the Input Validator 
	 * If the input is valid, it is passed to the timer object. 
	 * Invalid input will trigger an alert message.
	 */
	this.setTime = function(){
		input.setTime(time);
	}

	/**
	 * Clears the input fields when the 'Clear' button is pressed.
	 */
	this.clearInput = function(){
		display.clearInput();
	}

	/**
	 * Sets the format of the clock to either 12 hour or 24 hour.
	 *
	 * @param {number} pFormat The format of the clock. 12 or 24 are the only possibilities.
	 */
	this.setFormat = function(pFormat){
		time.setFormat(pFormat);
	}
	
	/**
	 * Sets AM/PM for 12 hour mode.
	 *
	 * @param {string} pMeridiem Designates AM/PM for 12 hour mode. 
	 */
	this.setMeridiem = function(pMeridiem){
		time.setMeridiem(pMeridiem);
	}

};
