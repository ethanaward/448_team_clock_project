var Clock = function(){
	//private data
	var i = new InputValidator();
	var d = new Display();
	var t = new Timer(12, 0, 0, 12);

	//methods------------------------------------------
	//initialization for the class
	this.init = function(){
		t.init();
	}

	//update loop that runs each 1s update
	this.update = function(){
		t.addTime();
		d.displayTime(t.getTime());
	}

	//make the menu toggle when the editTime key is pressed
	this.toggleTimeMenu = function(){
		i.toggleTimeMenu();
	}

	//validates the input time and sends it to the timer
	this.setTime = function(){
		//validates time and passes it to the timer obj t
		i.setTime(t);
	}

	//clears the input fields
	this.clearInput = function(){
		d.clearInput();
	}

	//sets 12/24 hour format in the Timer object
	this.setFormat = function(pFormat){
		//no need to validate, so send format to timer directly
		t.setFormat(pFormat);
	}
	
	this.setMeridiem = function(pMeridiem){
		t.setMeridiem(pMeridiem);
	}

};