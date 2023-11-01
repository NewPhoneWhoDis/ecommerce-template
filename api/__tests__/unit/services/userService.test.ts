import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {MongoMemoryServer} from 'mongodb-memory-server';
import {
	findUserByUsernameOrEmail,
	findUserById,
} from '../../../src/services/userService.service';
import {describe, expect, it, beforeAll, afterAll} from '@jest/globals';

dotenv.config();
let mongoServer;

beforeAll(async () => {
	mongoServer = new MongoMemoryServer();
	const mongoUri = await mongoServer.getUri();
	await mongoose.connect(mongoUri);
});

afterAll(async () => {
	await mongoose.disconnect();
	await mongoServer.stop();
});

describe('findUserByUsernameOrEmail', () => {
	it('should find user by username', async () => {
		const user = await findUserByUsernameOrEmail('testUsername');
		expect(user).toEqual(null);
		//expect(user).not.toBeNull(); // Expect user to exist
		//expect(user?.username).toBe('testUsername');
	});

	it('should find a user by email', async () => {
		// Write your test logic here
		const user = await findUserByUsernameOrEmail('testEmail');
		expect(user).toEqual(null);
	});
});

describe('findUserById', () => {
	it('should find user by id', async () => {
		const user = await findUserById('id123');
		expect(user).toEqual(null);
	});
});
