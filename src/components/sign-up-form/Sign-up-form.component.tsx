import {ChangeEvent, FormEvent, useState} from 'react';

interface FormFields {
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
}

const SignUpForm = () => {
	const initialValues: FormFields = {
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	};

	const [formFields, setFormFields] = useState<FormFields>(initialValues);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const {name, value} = event.target;
		setFormFields({...formFields, [name]: value});
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(formFields);
	};

	return (
		<div>
			<h1>Sign up with your email and password</h1>
			<form onSubmit={handleSubmit}>
				<label>Display Name</label>
				<input
					type="text"
					placeholder="Username"
					name="username"
					required
					value={formFields.username}
					onChange={handleChange}
				/>
				<label>Email</label>
				<input
					type="email"
					name="email"
					required
					value={formFields.email}
					onChange={handleChange}
				/>
				<label>Password</label>
				<input
					type="password"
					name="password"
					required
					value={formFields.password}
					onChange={handleChange}
				/>
				<label>Confirm Password</label>
				<input
					type="password"
					name="confirmPassword"
					required
					value={formFields.confirmPassword}
					onChange={handleChange}
				/>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};

export default SignUpForm;
