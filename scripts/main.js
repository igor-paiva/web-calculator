define(function(require) {
	var listNumbersButtons = document.getElementById('buttons').querySelectorAll('.numbersKey');

	var listOperationButtons = document.getElementById('buttons').querySelectorAll('.operationsKey');

	var negativateBtn = document.getElementById('negative');

	var openModalBtn = document.getElementById('historic');

	var closeModalBtn = document.getElementById('closeModal');

	var addAnswerBtn = document.getElementById('addAnswer');

	var openHelpBtn = document.getElementById('openHelp');

	var closeHelpBtn = document.getElementById('closeHelp');

	var cleanBtn = document.getElementById('clean');

	var equalBtn = document.getElementById('equal');


	cleanBtn.addEventListener('click', clearVisor);

	equalBtn.addEventListener('click', giveResult);

	addAnswerBtn.addEventListener('click', addAnswer);

	negativateBtn.addEventListener("click", negativateNumber);


	openModalBtn.onclick = function() {
		modal.style.display = 'block';
	}

	closeModalBtn.onclick = function() {
		modal.style.display = 'none';
	}

	openHelpBtn.onclick = function() {
		box.style.display = 'block';
	}

	closeHelpBtn.onclick = function() {
		box.style.display = 'none';
	}

	function clearVisor() {
		document.getElementById('visor').innerHTML = '';

		sessionStorage.clear();
	}

	function giveResult() {
		var visor = document.getElementById('visor').innerHTML;

		if (visor != null) result();
	}

	function addAnswer() {
		var lastAnswer = localStorage.getItem('lastAnswer');

		sessionStorage.clear();

		sessionStorage.setItem('number1', lastAnswer);

		document.getElementById('visor').innerHTML = '' + lastAnswer;
	}

	function negativateNumber() {
		var number1 = parseFloat(sessionStorage.getItem('number1'), 10)

		var number2 = parseFloat(sessionStorage.getItem('number2'), 10)

		var operation = sessionStorage.getItem('operation');

		if (operation == null) {
			number1 = number1*(-1);

			number1 = number1.toString();

			document.getElementById('visor').innerHTML = '' + number1;

			sessionStorage.setItem('number1', number1)
		} else {
			number2 = number2*(-1);

			number2 = number2.toString();

			var visor = '';
			if (operation == '/') {
				visor = '' + number1 + '&#xf7;' + '' + '(' + number2 + ')';

				document.getElementById('visor').innerHTML = visor;
			} else {
				visor = '' + number1 + operation + '(' + number2 + ')';

				document.getElementById('visor').innerHTML = visor
			}

			sessionStorage.setItem('number2', number2)
		}
	}

	function setNumber(number, storageNumber, numberId) {
		var numberKey = 'number' + numberId;

		if (storageNumber == null) {
			sessionStorage.setItem(numberKey, number);
		}  else {
			var newStorageNumber = storageNumber + number;

			sessionStorage.setItem(numberKey, newStorageNumber);
		}
	}

	function getNumber() {
		listNumbersButtons.forEach(function(button) {
			button.onclick = function() {
				var number = button.innerHTML;

				var actualVisor = document.getElementById('visor').innerHTML;

				var operation = sessionStorage.getItem('operation');

				if (operation == null) {
					var storageNumber1 = sessionStorage.getItem('number1');

					setNumber(number, storageNumber1, 1);

					document.getElementById('visor').innerHTML = actualVisor + number;
				}  else {
					if (operation != 'sqrt') {
						var storageNumber2 = sessionStorage.getItem('number2');

						setNumber(number, storageNumber2, 2);

						document.getElementById('visor').innerHTML = actualVisor + number;
					}
				}
			}
		});
	}

	function checkSpecialOperations(operation, actualVisor) {
		if (operation == 'sqrt') {
			document.getElementById('visor').innerHTML = '&radic;' + actualVisor;
		}
		else if (operation == '/') {
			document.getElementById('visor').innerHTML = actualVisor + '&#xf7;';
		}
		else {
			document.getElementById('visor').innerHTML = actualVisor + operation;
		}
	}

	function getOperation() {
		listOperationButtons.forEach(function(operationButton) {
			operationButton.onclick = function() {
				var operation = operationButton.getAttribute('id');

				var actualVisor = document.getElementById('visor').innerHTML;

				var storageOperation = sessionStorage.getItem('operation');

				if (storageOperation == null) {
					checkSpecialOperations(operation, actualVisor);

					sessionStorage.setItem('operation', operation);
				}
			}
		});
	}

	function doTheMath(operation, number1, number2) {
		var calculator = require('./calculator');

		var answer = null;

		switch (operation) {
			case '+':
				answer = calculator.sum(number1, number2);
				break;
			case '-':
				answer = calculator.minus(number1, number2);
				break;
			case 'x':
				answer = calculator.times(number1, number2);
				break;
			case '/':
				answer = calculator.division(number1, number2);
				break;
			case '^':
				answer = calculator.pow(number1, number2);
				break;
			case 'sqrt':
				answer = calculator.sqrt(number1);
				break;
			case '%':
				answer = calculator.percentage(number1, number2);
				break;
		}

		return answer;
	}

	function result() {
		var number1 = parseFloat(sessionStorage.getItem('number1'), 10);

		var number2 = parseFloat(sessionStorage.getItem('number2'), 10);

		var operation = sessionStorage.getItem('operation');

		if (number1 != null && operation != null) {
			var answer = doTheMath(operation, number1, number2);

			var count = document.getElementById('visor').innerHTML;

			var expression = count + '=' + answer;

			localStorage.setItem('lastAnswer', answer);

			localStorage.setItem('lastExpression', expression);

			document.getElementById('lastExpression').innerHTML = expression;

			document.getElementById('visor').innerHTML = answer;

			sessionStorage.clear();

			sessionStorage.setItem('number1', answer);
		}
	}

	function initialize() {
		var storageExpression = localStorage.getItem('lastExpression');

		document.getElementById('lastExpression').innerHTML = storageExpression;

		var operation = sessionStorage.getItem('operation');

		if (operation == null) {
			getNumber();

			getOperation();
		} else {
			var number2 = sessionStorage.getItem('number2');

			while (number2.lenght < 13 || number2 == null) getNumber();
		}
	}

	initialize();
});
