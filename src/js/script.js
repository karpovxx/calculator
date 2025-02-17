const resultElement = document.getElementById('result'),
	number1 = document.getElementById('input1'),
	number2 = document.getElementById('input2'),
	btnPlus = document.getElementById('plus'),
	btnMinus = document.getElementById('minus'),
	btnSubmit = document.getElementById('submit')
let operator = '+'

btnPlus.onclick = () => {
	operator = '+'
}
btnMinus.onclick = () => {
	operator = '-'
}
let printResult = result => {
	if (result < 0) {
		resultElement.style.color = 'red'
	} else {
		resultElement.style.color = 'green'
	}
	resultElement.textContent = result
}
let computeNumbersWithAction = (inp1, inp2, operatorSymbol) => {
	const num1 = +inp1.value
	const num2 = +inp2.value
	if (operatorSymbol == '+') {
		return num1 + num2
	} else if (operatorSymbol == '-') {
		return num1 - num2
	}
}

btnSubmit.onclick = () => {
	const result = computeNumbersWithAction(number1, number2, operator)
	printResult(result)
}
