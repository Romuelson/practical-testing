import { render, screen, fireEvent } from '@testing-library/react';
import App from './app';

describe('Компонент: App', () => {
	it('should-0', () => {
		render(<App />);

		const appTitle = screen.getByText(/hello world/i);
		const appButton = screen.getByRole('button');
		const appInput = screen.getByPlaceholderText(/input value.../i);

		expect(appTitle).toBeInTheDocument();
		expect(appButton).toBeInTheDocument();
		expect(appInput).toBeInTheDocument();

		expect(appInput).toMatchSnapshot();

		// screen.debug();
	});

	it('should-1', async () => {
		render(<App />);

		// const appTitle = screen.quertByText(/hello world2/i);
		// expect(appTitle).toBeNull();

		const appTitle = await screen.findByText(/data/i);
		expect(appTitle).toBeInTheDocument();
		expect(appTitle).toHaveStyle({ color: 'red' });
	});

	it('should-2', () => {
		render(<App />);

		const appInput = screen.getByPlaceholderText(/input value.../i);
		const toggleBtn = screen.getByTestId('toggleBtn');

		expect(screen.queryByTestId('valueElm')).toContainHTML('');
		expect(screen.queryByTestId('toggleElm')).toBeNull();

		fireEvent.input(appInput, {
			target: {value: '123123'}
		})

		// userEvent.type(appInput, '123123');
		fireEvent.click(toggleBtn);

		expect(screen.queryByTestId('valueElm')).toContainHTML('123123');
		expect(screen.getByTestId('toggleElm')).toBeInTheDocument();
	});
});
