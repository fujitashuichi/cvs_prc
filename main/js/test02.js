//--------------------------------!!!
// ONLOAD
//--------------------------------¡¡¡
window.onload = function() {

	//--------------------------------!!!
	// VARIABLES
	//--------------------------------!!!
	// const
	var FPS = 30; // framerate
	var FRAME_MSEC = 1000 / FPS >> 0;
	var NUM = 500; // max of points
	// var
	var x = 0;
	var y = 0;

	//--------------------------------!!!
	// RESET
	//--------------------------------¡¡¡
	var canvas = document.getElementById("world");
	var ctx = canvas.getContext("2d");
	var width = canvas.width;
	var height = canvas.height;
	var centerX = width / 2;
	var centerY = height / 2;
	var locX = Math.random() * width; // ball()初期位置
	var locY = Math.random() * height;
	var speed = 8;
	var speedX = speed;
	var speedY = speed;
	var gravity = 2.0;

	// set event handler
	setInterval(intervalHandler, FRAME_MSEC);

	//--------------------------------!!!
	// EVENTHANDLER
	//--------------------------------¡¡¡
	function intervalHandler() {
		// reset
		clearDisp();

		// draw
		ball(8);
		//rect(centerX, centerY, 200, 200);
		//circle(centerX, centerY, 50);
		line();
	}

	function clearDisp() {
		ctx.fillStyle = "rgba(0, 0, 0, 0.025)";
		ctx.fillRect(0, 0, width, height);
	}

	function ball(scale) {
		locX += speedX;
		locY += speedY; // += gravity;

		if (locX < (scale / 2) || width - (scale / 2) < locX) {
			speedX *= -1;
		}
		if (locY < (scale / 2) || height - (scale / 2) < locY) {
			speedY *= -1;
		}

		ctx.beginPath();
		ctx.fillStyle = color();
		ctx.arc(locX, locY, scale, 0, Math.PI * 2, false);
		ctx.fill();

		// ctx.beginPath();
		// ctx.strokeStyle = color();
		// ctx.moveTo(width / 2, 0);
		// ctx.lineTo(locX, locY);
		// ctx.stroke();
	}

	function rect(x, y, wid, hei) {
		ctx.fillStyle = "rgba(153, 255, 255, 0.1)";
		ctx.fillRect(x - (wid / 2), y - (hei / 2), wid, hei);
	}

	function circle(x, y, scale) {
		ctx.beginPath();
		ctx.fillStyle = "rgba(51, 51, 153, 0.1)";
		ctx.arc(x, y, scale, 0, Math.PI * 2, false);
		ctx.fill();
	}

	function line() {
		ctx.beginPath();
		ctx.strokeStyle = color();
		ctx.moveTo(width / 2, height);
		//ctx.moveTo(Math.random() * width, Math.random() * height);
		ctx.lineTo(Math.random() * width, Math.random() * height);
		ctx.stroke();
	}

	//--------------------------------!!!
	// UTILITY
	//--------------------------------¡¡¡
	function color() {
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		return "rgba(" + r + "," + g + "," + b + "," + 0.75 + ")";
	}
}
