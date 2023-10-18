import Directory from './components/directory/Directory.component';
import {categories} from './models/placeholder';

const App = () => {
	return <Directory categories={categories}></Directory>;
};

export default App;
