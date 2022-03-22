/* eslint-disable testing-library/prefer-screen-queries */

import userEvent from '@testing-library/user-event';

import { renderWithRedux } from '../../utils/tests/render-with-redux';

import Counter from './counter';

describe('Компонент: Counter', () => {
	it('should', () => {
		const initialState = {
			counter: { value: 10 }
		};

		const { getByTestId } = renderWithRedux(<Counter />, initialState);

		const incrementBtn = getByTestId('incrementBtn');

		expect(getByTestId('valueTitle')).toHaveTextContent('0');

		userEvent.click(incrementBtn);
		expect(getByTestId('valueTitle')).toHaveTextContent('1');
	});
});
