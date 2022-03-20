import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import Default from './components/default/default';

describe('Маршрутизация', () => {
	test('should', () => {
		// Если BrowserRouter выше компонента
		render(
			<MemoryRouter>
				<Default />
			</MemoryRouter>
		);

		const mainLink = screen.getByTestId('mainLink');
		const aboutLink = screen.getByTestId('aboutLink');

		userEvent.click(aboutLink);
		expect(screen.getByTestId('aboutPage')).toBeInTheDocument();

		userEvent.click(mainLink);
		expect(screen.getByTestId('mainLink')).toBeInTheDocument();

	});

	test('should-1', () => {
		render(
			<MemoryRouter initialEntries={['/xyz337']}>
				<Default />
			</MemoryRouter>
		);

		expect(screen.getByTestId('notFound')).toBeInTheDocument();
	});
});
