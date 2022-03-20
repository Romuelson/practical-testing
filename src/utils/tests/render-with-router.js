import { MemoryRouter } from 'react-router-dom';

import Default from '../../components/default/default';

export const renderWithRouter = (component, initialRoute = '/') => {
	return (
		<MemoryRouter initialEntries={[initialRoute]}>
			<Default />
			{ component }
		</MemoryRouter>
	);
};
