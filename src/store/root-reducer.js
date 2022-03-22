import { combineReducers } from '@reduxjs/toolkit';

import counterReducer from './slices/counter/counter';

export const rootReducer = combineReducers({
	counter: counterReducer,
});
