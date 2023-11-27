import jwt from 'jsonwebtoken';

export const generateToken = (userID: string): string => {
	return jwt.sign({id: userID}, process.env.JWT_SECRET as string, {
		expiresIn: '30d',
	});
};
