/* eslint-disable testing-library/no-debugging-utils */

import axios from 'axios';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import userData from '../../mocks/users-data';

import { renderWithRouter } from '../../utils/tests/render-with-router';
import { withGlobalEnvironment } from '../../utils/tests/with-global-environment'

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

		withGlobalEnvironment(null, undefined, '/users');

		const users = await screen.findAllByTestId('userItem');
		expect(users.length).toBe(3);
		expect(axios.get).toBeCalledTimes(1);

		userEvent.click(users[0]);
		expect(screen.getByTestId('userDeteils')).toBeInTheDocument();

		// screen.debug();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});
});
