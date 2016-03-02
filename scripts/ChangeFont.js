function initialFont() {

	var time = document.getElementById("time");
	time.style.fontSize = "100px";
	
}

function increaseFont() {

	var size = document.getElementById("time").style;

	
	if(size.fontSize.length == 5) {
		var num = size.fontSize.slice(0,3);
		num = 10 + +num;
		num = num + "px";
		size.fontSize = num;
	}
	
	else if(size.fontSize.length == 4) {
		var num = size.fontSize.slice(0,2);
		num = 10 + +num;
		num = num + "px";
		size.fontSize = num;
	}
	
	

}

function decreaseFont() {

	var size1 = document.getElementById("time").style;

	
	if(size1.fontSize.length == 5) {
		var num = size1.fontSize.slice(0,3);
		num = - 10 + +num;
		num = num + "px";
		size1.fontSize = num;
	}
	
	else if(size1.fontSize.length == 4) {
		var num = size1.fontSize.slice(0,2);
		num = - 10 + +num;
		num = num + "px";
		size1.fontSize = num;
	}


}