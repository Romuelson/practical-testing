import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './root-reducer';

export const createReduxStore = (initialState = {}) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState: initialState,
	});
};
