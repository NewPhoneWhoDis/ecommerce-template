const SignUpForm = () => {
	return (
		<div>
			<h1>Sign up with your email and password</h1>
			<form onSubmit={() => {}}>
				<label>Display Name</label>
				<input type="text" placeholder="Name" name="name" required />
				<label>Email</label>
				<input type="email" name="password" required />
				<label>Password</label>
				<input type="password" name="password" required />
				<label>Confirm Password</label>
				<input type="password" name="password" required />
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};

export default SignUpForm;
