//object test
var br = "<br/>";

//and class
function test11() {
	function snowboards(bName, bMade, bType, bSize, bOption) {
		this.bName = "NAME: " + bName + br;
		this.bMade = "MADE: " + "LibTech" + br;
		this.bType = "SHAPE: " + bType + br;
		this.bSize = "SIZE: " + bSize + br;
		this.bOption =  "none";

		this.newOption = newOption;
	}

	function newOption(BTX) {
		this.bOption = "CONTOR: " + BTX + br;
	}

	//overwrite toString
	snowboards.prototype.toString = function snowString() {
		var ret2 = this.bName + this.bMade + this.bType + this.bSize + this.bOption;
		return ret2;
	}

	//instance
	var skateBanana = new snowboards("SKATE BANANA", ".", "True Twin", "152", ".");
	skateBanana.newOption("BTX");
	var attackBanana = new snowboards("ATTACK BANANA", ".", "True Twin", "153", ".");
	attackBanana.newOption("EC2 BTX");
	var bananaMagic = new snowboards("BANANA MAGIC", ".", "True Twin", "152", ".");
	bananaMagic.newOption("BTX");

	//DOM
	document.write(skateBanana + br);
	document.write(attackBanana + br);
	document.write(bananaMagic + br);
}

// オブジェクトを作るよ
function test12() {
	var testUser = {
		email: "chaashuuu@gmail.com",
		score: "100",
		greet: function(userName) {
			document.write("Hello, " + userName + br + "From: " + this.email + br);
		}
	}

	testUser.greet("John");
}

// 組み込みオブジェクトを使うよ
function test13() {
	// String
	var testString = new String("fujita");
	document.write(testString.length + br);
	document.write(testString.replace("f", "F") + br);

	// Array
	var testArray = new Array(100, 200, 300);
	// var testArray = [100, 200, 300];
	document.write(testArray.length + br);
	testArray.push(400);
	document.write(testArray + br);

	// Math
	document.write(Math.PI + br);
	document.write(Math.ceil(8,3) + br);
	document.write(Math.floor(8,3) + br);
	document.write(Math.round(8,3) + br);
	document.write(Math.round(8,3) + br);

	// Date
	var testDate = new Date();
	var testNow = new Date(1990, 3, 29);
	document.write(testNow + br);	
	document.write(
		testDate.getFullYear() + " " +
		testDate.getMonth() + " " +
		testDate.getDay() + br
	);

	// DOM
	var testDom = document.getElementById("test-text");
	testDom.textContent = "Over writing!!";
	testDom.className = "test-text-add";

	document.getElementById("add").addEventListener("click", function() {
		var testElement = document.createElement("p"),
			testElementText = document.createTextNode("|********************************|");
		document.getElementById("add-box").appendChild(testElement).appendChild(testElementText);
	})
}