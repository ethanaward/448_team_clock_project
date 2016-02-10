var Clock = function(){
	var t = new Timer(12, 01, 00, 12);
	var i = new InputValidator();
	var d = new Display();

	//update loop that runs each 1s update
	this.update = function(){
		t.addTime();
		d.displayTime();
	}

	//make the menu appear when the editTime key is pressed
	this.editTimeMenu = function(){
		i.editTime(t.getFormat());
		//TODO
		//toggle the menu opening and closing as well.
	}

	//validates the input time and sends it to the timer
	this.setTime = function(){
		i.setTime(t);//validates time and passes it to the timer obj t
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