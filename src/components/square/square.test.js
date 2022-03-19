const square = require('./square');

describe('Компонент: square', () => {
	beforeEach(() => {
		/* Добавить в БД */
	});

	it('Вернет преобразование, если значение корректно', () => {
		// expect(square(2)).toBe(4);
		// expect(square(2)).toBeLessThan(5);
		// expect(square(2)).toBeGreaterThan(3);
		// expect(square(2)).not.toBeUndefined();

		const spyMathPow = jest.spyOn(Math, 'pow');
		square(2);
		expect(spyMathPow).toBeCalledTimes(1);
	});

	afterEach(() => {
		/* Удалить из БД */

		/* Очистить mocks */
		jest.clearAllMocks();
	});
});
