import {Outlet, Link} from 'react-router-dom';
import {Fragment} from 'react';
import './navigation.styles.scss';

const Navigation = () => {
	return (
		<Fragment>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<img src="crown.svg" alt="Crown Logo" className="logo" />
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						Shop
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
