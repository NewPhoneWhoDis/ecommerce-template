import {
	findUserByUsernameOrEmail,
	findUserById,
} from '../../../src/services/userService.service';

describe('findUserByUsernameOrEmail', () => {
	it('should find user by username', async () => {
		const user = await findUserByUsernameOrEmail('testUsername');
		expect(user).toEqual('testUsername');
	});

	it('should find a user by email', async () => {
		// Write your test logic here
		const user = await findUserByUsernameOrEmail('testEmail');
		expect(user).toEqual('testmail');
	});
});
