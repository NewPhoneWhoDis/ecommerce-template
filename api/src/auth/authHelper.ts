import jwt from 'jsonwebtoken';
import {Response} from 'express';

export const generateAccessToken = (userID: string): string => {
	return jwt.sign({id: userID}, process.env.JWT_SECRET as string, {
		expiresIn: '2h',
	});
};

export const generateRefreshToken = (userID: string) => {
	return jwt.sign({id: userID}, process.env.JWT_SECRET as string, {
		expiresIn: '7d',
	});
};

export const setAuthCookies = (res: Response, userId: string) => {
	const accessToken = generateAccessToken(userId);
	const refreshToken = generateRefreshToken(userId);

	res.cookie('accessToken', accessToken, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'strict',
		maxAge: 15 * 60 * 1000, // 15 minutes
	});

	res.cookie('refreshToken', refreshToken, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'strict',
		maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
	});
};
