import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { withGlobalEnvironment } from '../../utils/tests/with-global-environment';

import Navbar from './navbar';

describe('Компонент: Navbar', () => {
	it('should', async () => {
		withGlobalEnvironment(<Navbar />, {}, '/users');

		const createMainLink = screen.getByTestId('mainLink');

		userEvent.click(createMainLink);
		expect(screen.getByTestId('mainPage')).toBeInTheDocument();
	});

	it('should-1', async () => {
		withGlobalEnvironment(<Navbar />);

		const createAboutLink = screen.getByTestId('aboutLink');


		userEvent.click(createAboutLink);
		expect(screen.getByTestId('aboutPage')).toBeInTheDocument();
	});

	it('should-2', async () => {
		withGlobalEnvironment(<Navbar />);

		const createUsersLink = screen.getByTestId('usersLink');

		userEvent.click(createUsersLink);
		expect(screen.getByTestId('usersPage')).toBeInTheDocument();
	});
});
