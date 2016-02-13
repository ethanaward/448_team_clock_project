/**
 * Creates an instance of Clock.
 * @constructor
 */
var Clock = function(){
	//private data
	var i = new InputValidator();
	var d = new Display();
	var t = new Timer(12, 0, 0, 12);

	//methods------------------------------------------
	/**
	 * Initializes clock
	 * @this {clock}
	 */ 
	this.init = function(){
		t.init();
	}

	/**
	 * update loop that runs every 1s
	 * increments the time by 1s and displays it
	 */ 
	this.update = function(){
		t.addTime();
		d.displayTime(t.getTime());
	}

	/**
	 * makes the set time menu toggle whenever the edit time button is clicked
	 */
	this.toggleTimeMenu = function(){
		i.toggleTimeMenu();
	}

	/**
	 * validates the input received for the time by calling the Input Validator 
	 * If the input is valid, it is passed to the timer object. 
	 * Invalid input will trigger an alert message
	 */
	this.setTime = function(){
		
		i.setTime(t);
	}

	/**
	 * clears the input fields when the 'Clear' button is pressed
	 */
	this.clearInput = function(){
		i.clearInput();
	}

	/**
	 * sets the format of the clock to either 12 hour or 24 hour
	 * @param {number} pFormat. The format of the clock. 12 or 24 are the only possibilities
	 */
	this.setFormat = function(pFormat){
		t.setFormat(pFormat);
	}
	
	/**
	 * sets AM/PM for 12 hour mode
	 * @param {string} pMeridiem. Designates AM/PM for 12 hour mode. 
	 */
	this.setMeridiem = function(pMeridiem){
		t.setMeridiem(pMeridiem);
	}

};