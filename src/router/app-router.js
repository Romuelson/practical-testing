import { Routes, Route } from 'react-router-dom';

import Main from '../pages/main/main';
import About from '../pages/about/about';
import Users from '../components/users/users';
import UserDeteils from '../pages/user-details/user-details';
import NotFound from '../pages/not-found/not-found';

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/about" element={<About />} />
			<Route path="/users" element={<Users />} />
			<Route path="/users/:id" element={<UserDeteils />} />
			<Route path="/*" element={<NotFound />} />
		</Routes>
	);
};

export default AppRouter;
