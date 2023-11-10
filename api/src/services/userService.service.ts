import {MongoError} from 'mongodb';
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

async function createUser(data: {
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}): Promise<IUser | string> {
	try {
		const {username, firstName, lastName, email, password} = data;

		const existingUsername = await User.findOne({username});
		if (existingUsername) {
			return 'Username already taken';
		}

		const existingEmail = await User.findOne({email});
		if (existingEmail) {
			return 'Email already taken';
		}

		const newUser = new User({username, firstName, lastName, email, password});
		await newUser.save();
		return newUser;
	} catch (error) {
		if (error instanceof MongoError && error.code === 11000) {
			return 'User already exists';
		}
		throw error;
	}
}

export {findUserByUsernameOrEmail, findUserById, createUser};
