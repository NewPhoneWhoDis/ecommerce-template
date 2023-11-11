import {ChangeEvent, FormEvent, useState} from 'react';
import useAuth from '../hooks/useAuth';

interface FormFields {
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

const SignUpForm = () => {
	const initialValues: FormFields = {
		username: '',
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
	};

	const [formFields, setFormFields] = useState<FormFields>(initialValues);
	const {errorMessage, handleAuth, isSubmitting} = useAuth<FormFields>();

	const calculateNewStateFormFields = (
		currentState: FormFields,
		event: ChangeEvent<HTMLInputElement>
	) => {
		const {name, value} = event.target;
		return {...currentState, [name]: value};
	};

	function handleFormSubmission(formData: FormFields) {
		console.log(formData);
		handleAuth('register', formData);
	}

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newState = calculateNewStateFormFields(formFields, event);
		setFormFields(newState);
		console.log(formFields);
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(formFields);
		handleFormSubmission(formFields);
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
				<label>First Name</label>
				<input
					type="text"
					name="firstName"
					required
					value={formFields.firstName}
					onChange={handleChange}
				/>
				<label>Last Name</label>
				<input
					type="text"
					name="lastName"
					required
					value={formFields.lastName}
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
				<button type="submit" disabled={isSubmitting}>
					Sign Up
				</button>
			</form>
			{errorMessage && <p className="error-message">{errorMessage}</p>}
		</div>
	);
};

export default SignUpForm;
