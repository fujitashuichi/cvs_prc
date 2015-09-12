//--------------------------------!!!
// ONLOAD
//--------------------------------¡¡¡
window.onload = function() {

	//--------------------------------!!!
	// VARIABLES
	//--------------------------------¡¡¡
	var FPS = 30; // framerate
	var FRAME_MSEC = 1000 / FPS >> 0;
	var MAX = 500; // max of points

	//--------------------------------!!!
	// RESET
	//--------------------------------¡¡¡
	var canvas = document.getElementById("world");
	var ctx = canvas.getContext("2d");
	var width = canvas.width;
	var height = canvas.height;
	var centerX = width / 2;
	var centerY = height / 2;
	var n = 0; // count

	// set event handler
	setInterval(intervalHandler, FRAME_MSEC);

	//--------------------------------!!!
	// EVENTHANDLER
	//--------------------------------¡¡¡
	function intervalHandler() {
		// reset
		ctx.clearRect(0, 0, width, height);

		// var
		var oldX = centerX;
		var oldY = centerY;
		var oldVX = centerX;
		var oldVY = centerY;

		// draw loop
		for (var i = 0; i < MAX; i++) {
			ctx.beginPath();
			ctx.lineWidth = 1;
			//ctx.strokeStyle = getColorHSV(i / MAX * 360 + n * 4000, 0.25);
			ctx.fillStyle = getColorHSV(i / MAX * 360 + n * 7200, 0.25);
			ctx.strokeStyle = "rgba(255,255,255,0.25)";
			//ctx.fillStyle = "rgba(255,255,255,0.25)";

			// draw line
			ctx.moveTo(oldX, oldY);
			ctx.lineTo(
				oldX = centerX + (i * Math.cos(i + (i * n))),
				oldY = centerY + (i * Math.sin(i + (i * n)))
			);
			ctx.moveTo(oldVX, oldVY);
			ctx.lineTo(
				oldVX = centerX + (i * Math.sin(i + (i * n))),
				oldVY = centerY + (i * Math.cos(i + (i * n)))
			);
			ctx.stroke();

			// draw circle
			circle(
				oldX = centerX + (i * Math.cos(i + (i * n))),
				oldY = centerY + (i * Math.sin(i + (i * n))),
				1 + (i / 64)
			);
			circle(
				oldVX = centerX + (i * Math.sin(i + (i * n))),
				oldVY = centerY + (i * Math.cos(i + (i * n))),
				1 + (i / 64)
			);
		}

		// count set
		n += .00015; // .00025;
	}

	function circle(x, y, scale) {
		ctx.beginPath();
		ctx.arc(x, y, scale, 0, Math.PI * 2, true);
		ctx.fill();
	}

	//--------------------------------!!!
	// UTILITY
	//--------------------------------¡¡¡

	/**
	 * HSVカラーを取得する関数です。
	 * @param {Number} h
	 * @return {String} "rgb(r, b, g)"の文字列です。
	 */
	function getColorHSV(h, a) {
		var ht = (((h %= 360) < 0) ? h + 360 : h) / 60;
		var hi = Math.floor(ht);
		var r, g, b, a;
		var f = Math.round;
		switch (hi) {
			case 0:
				r = 0xff;
				g = f(0xff * (ht - hi));
				b = 0;
				break;
			case 1:
				g = 0xff;
				r = f(0xff * (1 - (ht - hi)));
				b = 0;
				break;
			case 2:
				g = 0xff;
				b = f(0xff * (ht - hi));
				r = 0;
				break;
			case 3:
				b = 0xff;
				g = f(0xff * (1 - (ht - hi)));
				r = 0;
				break;
			case 4:
				b = 0xff;
				r = f(0xff * (ht - hi));
				g = 0;
				break;
			case 5:
				r = 0xff;
				b = f(0xff * (1 - (ht - hi)));
				g = 0;
				break;
		}
		return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
	}

}
