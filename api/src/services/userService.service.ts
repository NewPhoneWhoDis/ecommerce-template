import User, {IUser} from '../models/User';

async function findUserByUsernameOrEmail(input: string): Promise<IUser | null> {
	try {
		const user: IUser | null = await User.findOne({
			$or: [{username: input}, {email: input}],
		});

		return user;
	} catch (error) {
		console.log(
			error instanceof Error ? error.message : 'Unknown error has occurred'
		);
		return null;
	}
}

async function findUserById(userId: string): Promise<IUser | null> {
	try {
		const user = await User.findById(userId);
		return user;
	} catch (error) {
		console.log(
			error instanceof Error ? error.message : 'Unknown error has occurred'
		);
		return null;
	}
}

export {findUserByUsernameOrEmail, findUserById};
