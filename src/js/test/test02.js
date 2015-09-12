//pure js text

function test06() {
	var txt = "Good night!";
	document.write(txt.length + "<br/>" + txt.toUpperCase());
}

//Array

function test07() {
	var myBoards = ["LibTech", "Burton", "Ride"];

	document.write(myBoards[0] + "<br/>");
}

function test08() {
	var myBool = new Boolean(false);

	if(myBool == true) {
		document.write("Boolean: true");
	} else {
		document.write("Boolean: false");
	}
}

function test09() {
	var pi_value = Math.PI;
	var sqrt_value = Math.sqrt(16);

	document.write("Math Round: " + Math.round(3.5) + "<br/>");
	document.write("Math Random: " + Math.random() * 100 + "<br/>");

	var mathTest = Math.floor(Math.random() * 100);

	document.write(mathTest + ": ");
	if(mathTest < 50) {
		document.write("Smaller than fifty!" + "<br/>");
	} else {
		document.write("Bigger than fifty!" + "<br/>");
	}
}

//objects
function test10() {
	// testObj.testProp01 = "Test propaty";
	// testObj.testProp02 = "2015.09.06";

	// document.write(testObj.testProp01 + "<br/>");
	// document.write(testObj.testProp02 + "<br/>");

	//propaty temp
	function person(firstname, age, sex) {
		this.firstname = firstname;
		this.age = age;
		this.sex = sex;
	}

	//object
	var john = new person("Jhon ", "25 ", "male");
	var kate = new person("Kate ", "24 ", "female");

	person.prototype.toString = function perToString() {
		var ret = this.firstname + this.age + this.sex;
		return ret;
	}

	document.write(john + "<br/>");
	document.write(kate + "<br/>");
}