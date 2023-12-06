// authHelper.test.ts
import {
	generateAccessToken,
	generateRefreshToken,
	setAuthCookies,
} from '../../../src/auth/authHelper';
import {Response} from 'express';
import {describe, expect, test, jest} from '@jest/globals';

// Mocking the sign method of jsonwebtoken
jest.mock('jsonwebtoken', () => ({
	sign: jest.fn(
		(payload: {id: string}) => `mocked-token-with-id-${payload.id}`
	),
}));

describe('Auth Helper', () => {
	const userId = 'testUserId';

	// Tests for token generation
	test('generateAccessToken returns a mocked JWT', () => {
		const token = generateAccessToken(userId);
		expect(token).toBe(`mocked-token-with-id-${userId}`);
	});

	test('generateRefreshToken returns a mocked JWT', () => {
		const token = generateRefreshToken(userId);
		expect(token).toBe(`mocked-token-with-id-${userId}`);
	});

	// Test for setAuthCookies
	test('sets access and refresh tokens in cookies', () => {
		const res = mockResponse();
		setAuthCookies(res, userId);

		expect(res.cookie).toHaveBeenCalledTimes(2);
		expect(res.cookie).toHaveBeenCalledWith(
			'accessToken',
			`mocked-token-with-id-${userId}`,
			expect.anything()
		);
		expect(res.cookie).toHaveBeenCalledWith(
			'refreshToken',
			`mocked-token-with-id-${userId}`,
			expect.anything()
		);
	});
});

// Mocking the Response object's cookie method
const mockResponse = () => {
	const res: Partial<Response> = {};
	res.cookie = jest.fn(() => res as Response);
	return res as Response;
};
