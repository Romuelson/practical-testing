import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { createReduxStore } from '../../store/store';

import { MemoryRouter } from 'react-router-dom';

import AppRouter from '../../router/app-router';

export const withGlobalEnvironment = (component, initialState = {}, initialRoute = '/') => {
	return render(
		<Provider store={createReduxStore(initialState)}>
			<MemoryRouter initialEntries={[initialRoute]}>
				<AppRouter />
				{ component }
			</MemoryRouter>
		</Provider>
	);
};
