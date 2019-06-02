var calculator = require('./calculator');

//SUM TESTS
test('add 3 + 4 to equal 7', function() {
	expect(calculator.sum(3, 4)).toBe(7);
});

test('add 3 + -4.5 to equal -1.5', function() {
	expect(calculator.sum(3, -4.5)).toBe(-1.5);
});

//SUBTRACTION TESTS
test('subtract 7 - 4 to equal 3', function() {
	expect(calculator.minus(7, 4)).toBe(3);
});

test('subtract 7 - -4 to equal 11', function() {
	expect(calculator.minus(7, -4)).toBe(11);
});

//MULTIPLICATION TESTS
test('multiply 3 * 4 to equal 12', function() {
	expect(calculator.times(3, 4)).toBe(12);
});

test('multiply 3 * 0 to equal 0', function() {
	expect(calculator.times(3, 0)).toBe(0);
});

test('multiply 2 * -5.5 to equal -11', function() {
	expect(calculator.times(2, -5.5)).toBe(-11);
});

//DIVISION TESTS
test('divide 1 / 2 to equal 0.5', function() {
	expect(calculator.division(1, 2)).toBe(0.5);
});

test('divide -1 / 2 to equal -0.5', function() {
	expect(calculator.division(-1, 2)).toBe(-0.5);
});

//PERCENTAGE TESTS
test('calculate 10 percent of 100(100*10%) to equal 10', function() {
	expect(calculator.percentage(10, 100)).toBe(10);
});

test('calculate 2.5 percent of 50(50*2.5%) to equal 1.25', function() {
	expect(calculator.percentage(2.5, 50)).toBe(1.25);
});

//SQUARE ROOT TESTS
test('calculate square root of 144 to equal 12', function() {
	expect(calculator.sqrt(144)).toBe(12);
});

test('calculate square root of 2 to be close to 1.41', function() {
	expect(calculator.sqrt(2)).toBeCloseTo(1.41);
});

test('calculate square root of -2 to be falsy', function() {
	expect(calculator.sqrt(-2)).toBeFalsy();
});

//EXPONENTIAL TESTS
test('calculate 2^3(2 to the power of 3) to equal 8', function() {
	expect(calculator.pow(2, 3)).toBe(8);
});

test('calculate -2^3(-2 to the power of 3) to equal -8', function() {
	expect(calculator.pow(-2, 3)).toBe(-8);
});

test('calculate 0.5^4(0.5 to the power of 4) to equal 0.0625', function() {
	expect(calculator.pow(0.5, 4)).toBe(0.0625);
});