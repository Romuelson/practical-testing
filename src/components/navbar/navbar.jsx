import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<Link to="/" data-testid='mainLink'>Main</Link>
			<Link to="/about" data-testid='aboutLink'>About</Link>
			<Link to="/users" data-testid='usersLink'>Users</Link>
		</>
	)
};

export default Navbar;
