import http from 'http';
import app from './app';

const PORT = process.env.PORT || '3000';

const server = http.createServer(app);

server.listen(PORT, () => {
	console.log('Listening on port: ' + PORT);
});

process.on('unhandledRejection', (reason, promise) => {
	console.log('Unhandled Rejection at:', promise, 'reason:', reason);
	server.close(() => {
		process.exit(1);
	});
});
