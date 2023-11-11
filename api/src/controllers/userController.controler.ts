import {Response, Request} from 'express';
import {
	createUser,
	findUserByUsernameOrEmail,
} from '../services/userService.service';

export const loggedUser = async (req: Request, res: Response) => {
	try {
		const {login, password} = req.body;

		const user = await findUserByUsernameOrEmail(login);

		if (!user) {
			return res.status(404).json('Invalid credentials');
		}

		const isMatch = await user.matchPassword(password);

		if (!isMatch) {
			return res.status(404).json('Invalid credentials');
		}
	} catch (error) {
		console.log(
			error instanceof Error
				? error.message
				: 'Internal Server Error. Please contact the administrator'
		);
	}
	return res.status(500).json('Internal Server Error. Please try again later.');
};

export const registerUser = async (req: Request, res: Response) => {
	try {
		const {username, firstName, lastName, email, password} = req.body;

		const result = await createUser({
			username,
			firstName,
			lastName,
			email,
			password,
		});
		if (typeof result === 'string') {
			return res.status(400).json({message: result});
		}

		return res.status(201).json('Userr registered successfully');
	} catch (error) {
		console.log(
			error instanceof Error
				? error.message
				: 'Internal Server Error. Please contact the administrator'
		);
		return res
			.status(500)
			.json('Internal Server Error. Please try again later.');
	}
};
