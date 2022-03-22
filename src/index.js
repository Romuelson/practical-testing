import React from 'react';
import ReactDOM from 'react-dom';

import { createReduxStore } from './store/store';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import Default from './components/default/default';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={createReduxStore()}>
			<BrowserRouter>
				<Default />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
