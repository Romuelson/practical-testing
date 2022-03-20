import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import React from 'react';
import Navbar from './navbar';

import { renderWithRouter } from '../../utils/tests/render-with-router';

describe('Компонент: Navbar', () => {
	it('should', async () => {
		renderWithRouter(<Navbar />, '/users');

		const createMainLink = screen.getByTestId('mainLink');

		userEvent.click(createMainLink);
		expect(screen.getByTestId('mainPage')).toBeInTheDocument();
	});

	it('should-1', async () => {
		renderWithRouter(<Navbar />);

		const createAboutLink = screen.getByTestId('aboutLink');


		userEvent.click(createAboutLink);
		expect(screen.getByTestId('aboutPage')).toBeInTheDocument();
	});

	it('should-2', async () => {
		renderWithRouter(<Navbar />);

		const createUsersLink = screen.getByTestId('usersLink');

		userEvent.click(createUsersLink);
		expect(screen.getByTestId('usersPage')).toBeInTheDocument();
	});
});
