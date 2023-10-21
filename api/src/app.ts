import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import config from '../config';

const app = express();

app.use(
	cors({
		origin: 'http://localhost:5173',
	})
);
app.use(express.json());

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
