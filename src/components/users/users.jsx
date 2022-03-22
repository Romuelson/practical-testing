import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
	const [users, setUsers] = useState([]);

	const loadUsers = async () => {
		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/users');
			setUsers(response.data);
		} catch (e) {

		};
	};

	useEffect(() => {
		loadUsers();
	}, []);

	return (
		<div data-testid='usersPage'>
			{
				users.length && users.map((user) =>
					<Link
						to={`/users/${user.id}`}
						key={user.id}
						data-testid='userItem'
					>
						{ user.name }
					</Link>
				)
			}
		</div>
	);
};

export default Users;
