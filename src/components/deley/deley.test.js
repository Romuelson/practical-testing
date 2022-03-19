const deley = require('./deley');

describe('Компонент: deley', () => {
	it('Вернет преобразование, если значение корректно', async () => {
		const sum = await deley(() => 5 + 5, 1000);
		expect(sum).toBe(10);
	});
});
