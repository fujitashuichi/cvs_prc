//pure js text

function test01() {
	document.write("<h2>This is test texts !!</h2>")
	document.write("<p>This is test texts !!</p>")

	var txt01 = "Shuichi";
	var txt02 = "Fujita";
	var txt03 = txt01 + " " + txt02 + "<br/>";
	document.write(txt03);
}

var d, time, theDay;
d = new Date();

function test02() {
	time = d.getHours();

	if (6 < time && time < 10) {
		document.write("Good morning!" + "<br/>");
	} else if(10 < time && time < 16) {
		document.write("Good day!");
	} else if(16 < time && time < 19) {
		document.write("Good evening!" + "<br/>");
	} else {
		document.write("Good night!" + "<br/>");
	}
}

function test03() {
	theDay = d.getDay();

	switch (theDay) {
		case 5:
			document.write("It's Friday!! Go home harry!!" + "<br/>");
			break;
		case 6:
			document.write("Saturday!! S.A.T.U.R.D.A.Y NIGHT!!" + "<br/>");
			break;
		case 0:
			document.write("Sunday Morning." + "<br/>");
			break;
		case 1:
			document.write("Mondey... Shit..." + "<br/>");
			break;
		default:
			document.write("||||||||||||||||" + "<br/>");
	}
}

function test04() {
	var i;
	for (i = 0; i < 5; i++) {
		if (i == 3) {
			continue;
		}
		document.write("No. " + i + "<br/>");	
	}
}

function test05() {
	var x;
	var myCars = new Array();
	myCars[0] = "Audi";
	myCars[1] = "BMW";
	myCars[2] = "Volvo";

	for (x in myCars) {
		document.write(myCars[x] + "<br/>");
	}
}