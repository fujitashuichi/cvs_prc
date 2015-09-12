//pure js text

window.onload = function() {
	// set timer
	var timerID = setInterval("moveTimer()", 1000);
};

function moveTimer() {
	var date, Hou, Min, Sec, hDeg, mDeg, sDeg;
	//日付
	date = new Date();
	//時間取得
	Hou = date.getHours();
	Min = date.getMinutes();
	Sec = date.getSeconds();
	//針の角度取得
	hDeg = (Hou % 12) * (360 / 12);
	mDeg = Min * (360 / 60);
	sDeg = Sec * (360 / 60);
	//角度調整
	hDeg += (Min / 60) * (360 / 12);
	mDeg += (Sec / 60) * (360 / 60);
	//回転表示
	document.getElementById("analogClock").style.transform = "rotate(180deg)";
	document.getElementById("clockHours").style.transform = "rotate(" + hDeg + "deg)";
	document.getElementById("clockMinutes").style.transform = "rotate(" + mDeg + "deg)";
	document.getElementById("clockSeconds").style.transform = "rotate(" + sDeg + "deg)";

	//デジタル表示
	if (Hou < 10) Hou = "0" + Hou;
	if (Min < 10) Min = "0" + Min;
	if (Sec < 10) Sec = "0" + Sec;
	//時刻表示
	document.getElementById("digitalClock").innerHTML = Hou + ":" + Min + ":" + Sec;
	//角度表示
	//document.getElementById("digitalClockDeg").innerHTML = hDeg + ":" + mDeg + ":" + sDeg;

	var hLen, mLen, sLen;
	hLen = Hou * (100 / 24);
	mLen = Min * (100 / 59);
	sLen = Sec * (100 / 59);
	hLen += (Min / 59) * (100 / 23);
	mLen += (Sec / 59) * (100 / 59);
	document.getElementById("barHours").style.width = hLen + "%";
	document.getElementById("barMinutes").style.width = mLen + "%";
	document.getElementById("barSeconds").style.width = sLen + "%";
};
