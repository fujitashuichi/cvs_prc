// ES6 test

"use strict";

window.onload = function () {
	// const
	var FPS = 30;
	var FRAME_MSEC = 1000 / FPS >> 0;
	var NUM = 500;
	var x = 0;
	var y = 0;

	var canvas = document.getElementById("world");
	var ctx = canvas.getContext("2d");
	var width = canvas.width;
	var height = canvas.height;
	var centerX = width / 2;
	var centerY = height / 2;

	// set event handler
	setInterval(intervalHandler, FRAME_MSEC);

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
		clearDisp();

		ctx.fillStyle();
		ctx.fillRect();
		ctx.beginPath();
		ctx.strokeStyle = color();
		ctx.moveTo(width / 2, 0);
		ctx.lineTo(200, 200);
		ctx.stroke();
	}
};
