//calculator

var myTotal = 0; // 現在の合計値
var myInput = ""; // 現在入力している値
var myCalc = "+"; // 合計と入力値の演算子
var myFlg = 1; // １回前に入力したもの 0:数字 1:演算子

function myValue(myData) {
	myFlg = 0;
	myInput += myData;
	document.myForm.myLine.value = myInput;
}

function myCalculator(myData) {
	if (myFlg == 0) {
		myFlg = 1;
		myWork = myTotal + myCalc + myInput;
		myTotal = eval(myWork);
		myInput = "";
		document.myForm.myLine.value = myTotal;
	}
	if (myData == "=") {
		myTotal = 0;
		myCalc = "+";
	} else {
		myCalc = myData;
	}
}

function myC() {
	myTotal = 0;
	myCalc = "+";
	myInput = "";
	document.myForm.myLine.value = myTotal;
}
