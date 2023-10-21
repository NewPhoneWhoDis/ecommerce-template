import {Route, Routes} from 'react-router-dom';

import Home from './routes/home/Home.component';
import Navigation from './routes/navigation/Navigation.component';
import Shop from './routes/shop/Shop.component';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />}></Route>
				<Route path="/shop" element={<Shop />}></Route>
			</Route>
		</Routes>
	);
};

export default App;
