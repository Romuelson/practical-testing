import { Link } from 'react-router-dom';


import AppRouter from '../../router/app-router';

const Default = () => {
	return (
		<>
			<Link to="/" data-testid='mainLink'>Main</Link>
			<Link to="/about" data-testid='aboutLink'>About</Link>
			<Link to="/users" data-testid='usersLink'>Users</Link>

			<AppRouter />
		</>
	);
};

export default Default;
