import axios from 'axios';
import { useEffect, useState } from 'react';

const Users = () => {
	const [users, setUsers] = useState([]);

	const loadUsers = async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
		setUsers(response.data);
	};

	useEffect(() => {
		loadUsers();
	}, []);

	return (
		<div>
			{
				users.map((user) =>
					<div key={user.id} data-testid='userItem'>
						{ user.name }
					</div>
				)
			}
		</div>
	);
};

export default Users;
