var Clock = function(){
	var t = new Timer(0, 0, 0, 12);
	var i = new InputValidator();
	var d = new Display();

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
		i.clearInput();
	}

	this.setFormat = function(){
		//no need to validate, so send format to timer directly
		t.setFormat();
	}

};