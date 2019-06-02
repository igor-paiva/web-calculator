define(function() {
	return {
		sum: function(number1, number2) {
			return number1 + number2;
		},
		minus: function(number1, number2) {
			return number1 - number2;
		},
		times: function(number1, number2) {
			return number1 * number2;
		},
		division: function(number1, number2) {
			return number1 / number2;
		},
		percentage: function(percentage, value) {
			return ((value * percentage) / 100);
		},
		sqrt: function(number) {
			return Math.sqrt(number);
		},
		pow: function(base, exponent) {
			return Math.pow(base, exponent);
		}
	}
});
