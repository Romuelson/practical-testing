const arrayString = require('./array-string');

describe('Компонент: arrayString', () => {
	it('Вернет преобразование, если значение корректно', () => {
		expect(arrayString([1, 2, 3])).toEqual(['1', '2', '3']);
	});

	it('Вернет преобразование, если значение некорректно', () => {
		expect(arrayString([1, 2, 3, null, undefined, 'unknown'])).toEqual(['1', '2', '3']);
	});

	it('Вернет пустой массив, если нет значения', () => {
		expect(arrayString([])).toEqual([]);
	});

	it('Не вернет некорректное преобразование, при корректном аргументе', () => {
		expect(arrayString([1, 2, 3])).not.toEqual([1, 2 ,3 ,4]);
	});
});
