import {Route, Routes} from 'react-router-dom';

import Home from './routes/home/Home.component';
import Navigation from './routes/navigation/Navigation.component';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}></Route>
			<Route index element={<Home />}></Route>
		</Routes>
	);
};

export default App;
