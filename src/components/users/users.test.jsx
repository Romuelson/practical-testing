/* eslint-disable testing-library/no-debugging-utils */

import axios from 'axios';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Route, Routes, MemoryRouter } from 'react-router-dom';
import AppRouter from '../../router/app-router';

import userData from '../../mocks/users-data';

import Users from './users';
import UserDeteils from '../../pages/user-details/user-details';
import { renderWithRouter } from '../../utils/tests/render-with-router';

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

		render(renderWithRouter(null, '/users'));

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
