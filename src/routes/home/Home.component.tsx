import Directory from '../../components/directory/Directory.component';
import {Outlet} from 'react-router-dom';
import {categories} from '../../models/placeholder';

const Home = () => {
	return (
		<div>
			<Outlet />
			<Directory categories={categories}></Directory>;
		</div>
	);
};

export default Home;
