import {Response, Request} from 'express';
import {
	createUser,
	findUserByUsernameOrEmail,
} from '../services/userService.service';
import {generateToken} from '../auth/authHelper';
import logger from '../../logger';

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

		const token = generateToken(user._id.toString());
		logger.info('User logged in successfully');
		return res.status(200).json({token});
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

		const token = generateToken(result._id.toString());

		logger.info('User registered in successfully');
		return res
			.status(201)
			.json({message: 'User registered successfully', token});
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
