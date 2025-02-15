const result = document.getElementById('result'),
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
btnSubmit.onclick = () => {
	if (operator == '+') {
		const sum = +number1.value + +number2.value
		result.textContent = sum
	}
	if (operator == '-') {
		const sub = +number1.value - +number2.value
		result.textContent = sub
	}
}
