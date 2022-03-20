import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import App from './components/app/app';
import Default from './components/default/default';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Default />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
