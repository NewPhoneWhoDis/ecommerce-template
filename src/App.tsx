import {Route, Routes} from 'react-router-dom';

import Home from './routes/home/Home.component';
import Navigation from './routes/navigation/Navigation.component';
import Shop from './routes/shop/Shop.component';
import SignIn from './routes/auth/sign-in/Sign-in.component';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />}></Route>
				<Route path="shop" element={<Shop />}></Route>
				<Route path="sign-in" element={<SignIn />}></Route>
			</Route>
		</Routes>
	);
};

export default App;
