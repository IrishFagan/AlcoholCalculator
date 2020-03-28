function isFloat(value) {
	return (/^-?[\d]*(\.[\d]+)?$/g).test(value.innerHTML)
}

function numClicked(multi_num, multi_checkbox) {
	var num = multi_num;
	var checkbox = multi_checkbox;
	if(checkbox.checked == false) {
		num.style.display = "none";
		num.value = 1;
		return false;
	} else {
		num.style.display = "inline-block";
		return true;
	}
}

function milSelected(input, title) {
	if(input.checked == true) {
		title.innerHTML = "milileters";
		return true;
	} else {
		title.innerHTML = "fluid oz";
		return false;
	}
}

function calculateTotal(priceForm, ozForm, abvForm, calcParam, multiNumberParam, milileterCheck) {
	var price = priceForm.replace(/[^0-9.]/g, "");
	var oz = ozForm.replace(/[^0-9.]/g, "");
	var abv = abvForm.replace(/[^0-9.]/g, "");
	var calc = calcParam;
	var num = multiNumberParam;
	var checkbox = milileterCheck;
	calc.style.display = "inline-block";
	if(checkbox.checked == true) {
		var oz = oz * 0.033814;
	}
	if(price == "") {
		console.log("PRICE invalid");
		calc.innerHTML = "Not valid price value";
	} else if(oz == "") {
		console.log("oz invalid");
		calc.innerHTML = "Not valid fluid value";
	} else if(abv == "") {
		console.log("abv invalid");
		calc.innerHTML = "Not valid ABV value";
	} else {
		console.log("valid");
		var dec_alc = abv/100;
		var oz_by_dec = oz * dec_alc;
		var div_price = price/num;
		var final = oz_by_dec/div_price;
		var final_num = final.toFixed(2);
		calc.innerHTML = final_num;
	}
}

function compareTotal(calcTotal1, calcTotal2) {
	calcTotal1.style.backgroundColor = "orange";
	calcTotal2.style.backgroundColor = "orange";

	if(isFloat(calcTotal1)) {
		calcTotal1.style.backgroundColor = "green";
	}
	if(isFloat(calcTotal2)) {
		calcTotal2.style.backgroundColor = "green";
	}

	if(isFloat(calcTotal1) && isFloat(calcTotal2)) {
		calcTotal1.style.backgroundColor = "green";
		calcTotal2.style.backgroundColor = "green";

		if(calcTotal1.innerHTML > calcTotal2.innerHTML) {
			calcTotal2.style.backgroundColor = "red";
		} else if (calcTotal1.innerHTML < calcTotal2.innerHTML) {
			calcTotal1.style.backgroundColor = "red";
		}
	}
}