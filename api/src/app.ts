import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import config from '../config';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(
	cors({
		origin: 'http://127.0.0.1:5173',
	})
);
app.use(express.json());
app.use('/api/users', userRoutes);

if (config && config.mongoURI !== undefined) {
	mongoose
		.connect(config.mongoURI)
		.then(() => console.log('MongoDB Connected'))
		.catch((err) => {
			if (err instanceof Error) {
				console.error(err.message);
			} else {
				console.error(
					'An unexpected error occurred during MongoDB connection:',
					err
				);
			}
		});
} else {
	throw new Error('mongoURI is not defined in the env variables');
}

export default app;
