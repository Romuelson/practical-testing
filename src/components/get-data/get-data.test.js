const axios = require('axios');

const getData = require('./get-data');
const mockUserData = require('../../mocks/users-data');

jest.mock('axios');

describe('Компонент: getData', () => {
	let response;

	beforeEach(() => {
		response = {
			data: mockUserData
		};
	});

	it('Произведет успешный вызов и вернет преобразованные данные', async () => {
		axios.get.mockReturnValue(response);

		const data = await getData();

		expect(axios.get).toBeCalledTimes(1);
		expect(data).toEqual(['1', '2', '3']);
		expect(data).toMatchSnapshot(['1', '2', '3']);
	});
});
