var circleArray = [];


function rgbRandomizer(){
	var val = Math.floor(Math.random()*256);
	return val;
}

function addCircle(){
	var circle = document.createElement("div");
	circle.className = "ball";
	circle.style.top = Math.floor(Math.random()*500) + "px";
	circle.style.left = Math.floor(Math.random()*1200) + "px";
	document.body.appendChild(circle);

	var x = orientation();
	var y = orientation();
	circleArray.push([circle, x, y]);


	circle.addEventListener('click', function(){
		circle.style.backgroundColor = "rgb(" + rgbRandomizer() + ", " + rgbRandomizer() + ", " + rgbRandomizer() + ")";
	})

	
}

function orientation(){
	var val = Math.floor(Math.random()*2);
	var negpos = 0;
	if (val == 1){
		negpos = 1;
	}
	else{
		negpos = -1;
	}

	return negpos;
}

function moveEverything(){
		for (var i = 0; i < circleArray.length; i++){
		var left = parseInt(circleArray[i][0].style.left, 10);
		var top = parseInt(circleArray[i][0].style.top, 10);
		if(top <= 0){
			circleArray[i][2] = 1;
		}
		else if (top >= 500){
			circleArray[i][2] = -1; 
		}

		if (left <= 0){
			circleArray[i][1] = 1;
		}
		else if(left >= 1200){
			circleArray[i][1] = -1;	
		}

		left += circleArray[i][1]*3;
		top += circleArray[i][2]*3;
		circleArray[i][0].style.top = top + "px";
		circleArray[i][0].style.left = left + "px";
	}

}

window.onload = function startup(){

	setInterval(moveEverything, 50);
}
