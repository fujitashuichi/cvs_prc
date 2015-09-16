// ES6 test

window.onload = () => {
	// const
	let FPS = 30;
	let FRAME_MSEC = 1000 / FPS >> 0
	let NUM = 500;
	let x = 0;
	let y = 0;

	let canvas = document.getElementById("world");
	let ctx = canvas.getContext("2d");
	let width = canvas.width;
	let height = canvas.height;
	let centerX = width / 2;
	let centerY = height / 2;

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

	class ball(scale) {
		ctx.fillStyle();
		ctx.fillRect();
		ctx.beginPath();
		ctx.strokeStyle = color();
		ctx.moveTo(width / 2, 0);
		ctx.lineTo(200, 200);
		ctx.stroke();
	}
};
