import {Response, Request} from 'express';
import {
	createUser,
	findUserByUsernameOrEmail,
} from '../services/userService.service';
import logger from '../../logger';
import {setAuthCookies} from '../auth/authHelper';

export const logUser = async (req: Request, res: Response) => {
	try {
		const {login, password} = req.body;

		const user = await findUserByUsernameOrEmail(login);

		if (!user) {
			return res.status(401).json('Invalid credentials');
		}

		const isMatch = await user.matchPassword(password);

		if (!isMatch) {
			return res.status(401).json('Invalid credentials');
		}

		setAuthCookies(res, user._id.toString());
		logger.info('User logged in successfully');
		return res.status(200).json('Login successful!');
	} catch (error) {
		console.log(
			error instanceof Error
				? logger.error(`Error in logUser: ${error.message}`)
				: 'Internal Server Error. Please contact the administrator'
		);
		return res
			.status(500)
			.json('Internal Server Error. Please try again later.');
	}
};

export const registerUser = async (req: Request, res: Response) => {
	try {
		const {username, firstName, lastName, email, password} = req.body;

		const user = await createUser({
			username,
			firstName,
			lastName,
			email,
			password,
		});
		if (typeof user === 'string') {
			return res.status(400).json({message: user});
		}

		setAuthCookies(res, user._id.toString());
		logger.info('User registered in successfully');
		return res.status(201).json({message: 'User registered successfully'});
	} catch (error) {
		console.log(
			error instanceof Error
				? logger.error(`Error in logUser: ${error.message}`)
				: 'Internal Server Error. Please contact the administrator'
		);
		return res
			.status(500)
			.json('Internal Server Error. Please try again later.');
	}
};
