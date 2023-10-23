import {useEffect} from 'react';

const SignIn = () => {
	useEffect(() => {
		// await getting the reddirect result
	}, []);

	return (
		<div>
			<h1>Sign in page</h1>
			<button onClick={someFunc}>Sign In</button>
		</div>
	);
};

function someFunc() {}

export default SignIn;
