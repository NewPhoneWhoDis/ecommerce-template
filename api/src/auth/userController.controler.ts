import {Response, Request} from 'express';
import {findUserByUsernameOrEmail} from '../services/userService.service';

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
};
