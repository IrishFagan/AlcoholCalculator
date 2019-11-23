function num_clicked(multi_num, multi_checkbox) {
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

function calculate(price_form, oz_form, ABV_form, calc_p, multi_num) {
	var price = price_form
	var oz = oz_form
	var ABV = ABV_form
	var calc = calc_p
	var num = multi_num
	calc.style.display = "inline-block";
	if(price == "") {
		console.log("PRICE invalid")
		calc.innerHTML = "Not valid price value"
	} else if(oz == "") {
		console.log("oz invalid")
		calc.innerHTML = "Not valid ounce value"
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