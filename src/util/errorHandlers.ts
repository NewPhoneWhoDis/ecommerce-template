export function logError(error: unknown): void {
	const message =
		error instanceof Error
			? error.message
			: 'Internal Server Error. Please contact the administrator';

	console.log(message);
}
