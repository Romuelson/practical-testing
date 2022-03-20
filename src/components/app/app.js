import { useState, useEffect } from 'react';

const App = () => {
	const [data, setData] = useState(null);
	const [toggle, setToggle] = useState(false);
	const [value, setValue] = useState('');

	const onClick = () => setToggle(prev => !prev);

	useEffect(() => {
		setTimeout(() => {
			setData({});
		}, 100);
	}, []);

	return (
		<div>
			<h1 data-testid='valueElm'>{ value }</h1>
			{ data && <div style={{color: 'red'}}>data</div> }
			{ toggle && <div data-testid='toggleElm'>Toggle</div> }
			<h1 className='app__title'>Hello World</h1>
			<button data-testid='toggleBtn' onClick={onClick} className='app_button'>Click me</button>
			<input onChange={(evt) => setValue(evt.target.value)} className='app_input' type='text' placeholder='input value...' />
		</div>
	)
};

export default App;
