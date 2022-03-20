/* eslint-disable testing-library/no-debugging-utils */

import axios from 'axios';
import { render, screen } from '@testing-library/react';

import Users from './users';
import userData from '../../mocks/users-data';

jest.mock('axios');

const mockUserData = userData;

describe('Компонент: Users', () => {
	let response;

	beforeEach(() => {
		response = {
			data: mockUserData
		};
	});

	it('should', async () => {
		axios.get.mockReturnValue(response);

		render(<Users />);

		const users = await screen.findAllByTestId('userItem');

		expect(users.length).toBe(3);
		expect(axios.get).toBeCalledTimes(1);

		// screen.debug();
	});
});
