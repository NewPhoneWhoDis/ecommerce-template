// logger.ts
import winston from 'winston';

const logConfiguration = {
	transports: [
		new winston.transports.Console({
			level: 'info',
			format: winston.format.combine(
				winston.format.colorize(),
				winston.format.simple()
			),
		}),
		new winston.transports.File({
			level: 'error',
			filename: './logs/errors.log',
			format: winston.format.combine(
				winston.format.timestamp({
					format: 'MMM-DD-YYYY HH:mm:ss',
				}),
				winston.format.printf(
					(info) => `${info.level}: ${[info.timestamp]}: ${info.message}`
				)
			),
		}),
	],
};

const logger = winston.createLogger(logConfiguration);

export default logger;
