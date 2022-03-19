const validateValue = require('./validate-value');

/* Пример unit тестирования */

describe('Компонент: validateValue', () => {
	it('Вернет "true", если значение корректно', () => {
		expect(validateValue(50)).toBe(true);
	});

	it('Вернет "true", для пограничных значений', () => {
		expect(validateValue(0)).toBe(true);
		expect(validateValue(100)).toBe(true);
	});

	it('Вернет "false", для значений вне диапазона', () => {
		expect(validateValue(-1)).toBe(false);
		expect(validateValue(101)).toBe(false);
	});
});
