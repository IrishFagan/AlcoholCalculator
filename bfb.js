function numClicked(multi_num, multi_checkbox) {
	var num = multi_num
	var checkbox = multi_checkbox
	if(checkbox.checked == false) {
		num.style.display = "none"
		num.value = 1
		return false
	} else {
		num.style.display = "inline-block"
		return true
	}
}

function milSelected(input, title) {
	if(input.checked == true) {
		title.innerHTML = "milileters"
		return true
	} else {
		title.innerHTML = "fluid oz"
		return false
	}
}

function calculateTotal(price_form, oz_form, ABV_form, calc_p, multi_num, mil_check) {
	var price = price_form.replace(/[^0-9.]/g, "")
	var oz = oz_form.replace(/[^0-9.]/g, "")
	var ABV = ABV_form.replace(/[^0-9.]/g, "")
	var calc = calc_p
	var num = multi_num
	var checkbox = mil_check
	calc.style.display = "inline-block";
	if(checkbox.checked == true) {
		var oz = oz * 0.033814
	}
	if(price == "") {
		console.log("PRICE invalid")
		calc.innerHTML = "Not valid price value"
	} else if(oz == "") {
		console.log("oz invalid")
		calc.innerHTML = "Not valid fluid value"
	} else if(ABV == "") {
		console.log("abv invalid")
		calc.innerHTML = "Not valid ABV value"
	} else {
		console.log("valid")
		var dec_alc = ABV/100
		var oz_by_dec = oz * dec_alc
		var div_price = price/num
		var final = oz_by_dec/div_price
		var final_num = final.toFixed(2)
		calc.innerHTML = final_num;
	}
}