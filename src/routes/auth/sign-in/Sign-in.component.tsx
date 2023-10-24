import {useEffect} from 'react';
import SignUpForm from '../../../components/sign-up-form/Sign-up-form.component';

const SignIn = () => {
	useEffect(() => {
		// await getting the reddirect result
	}, []);

	return (
		<div>
			<h1>Sign in page</h1>
			<button onClick={someFunc}>Sign In</button>
			<SignUpForm />
		</div>
	);
};

function someFunc() {}

export default SignIn;
