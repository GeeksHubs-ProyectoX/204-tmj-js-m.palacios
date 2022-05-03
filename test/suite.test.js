const limites = require('./test01.js');

	test("3 -5 4 2 6 3 1", function () {
		result = limites("3 -5 4 2 6 3 1")
		expect(result).toBe("6 3 -5");
	});

	test('0 0 3 5 -78 25', function () {
		result = limites("0 0 3 5 -78 25")
		expect(result).toBe("25 3 -78");
	});

	test('1 9 3 4 -5', function () {
		result = limites("1 9 3 4 -5")
		expect(result).toBe("9 3 -5");
	});

	test('100 2 1 5 8 -5 -7', function () {
		result = limites("100 2 1 5 8 -5 -7")
		expect(result).toBe("100 2 -7");
	});

	test('50 10 2 0 4 1 77 58', function () {
		result = limites("50 10 2 0 4 1 77 58")
		expect(result).toBe("77 10 0");
	});

	
	test('0', function () {
		result = limites("0")
		expect(result).toBe("0 0 0");
	});

	test('0 0 0', function () {
		result = limites("0 0 0")
		expect(result).toBe("0 0 0");
	});

	test('584 241 0 1 -52 -85 -41 5 0', function () {
		result = limites("584 241 0 1 -52 -85 -41 5 0")
		expect(result).toBe("584 1 -85");
	});

	test('50 20 14 05 95 -9 0 5', function () {
		result = limites("50 20 14 05 95 -9 0 5")
		expect(result).toBe("95 14 -9");
	});

	test('410 25 95 3 -5 -85 14 10', function () {
		result = limites("410 25 95 3 -5 -85 14 10")
		expect(result).toBe("410 14 -85");
	});

	test('-25 -1 -20 -524 -10 -5', function () {
		result = limites("-25 -1 -20 -524 -10 -5")
		expect(result).toBe("-1 -10 -524");
	});