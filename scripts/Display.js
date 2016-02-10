var Display = function(){
	//private data
	//TODO make html ids for outputs
	var time = document.getElementById("time").innerHTML;
	//etc for error message tags, and the am/pm tag.

	//methods
	this.displayTime = function(h, m, s){
		//TODO
		//concatonates  a string of the time with colons
		//displays it on the html page
	}

	this.displayFormat = function(){
		//TODO
		//if the format is 24h, dont display am/pm.
		//if the format is 12h, display am or pm after time string.
	}

	this.displayErrorMsg = function(){
		//TODO
		//prints error messages at designated tags for invalid input.
	}
};