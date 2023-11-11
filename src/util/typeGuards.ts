export function isGenericError(error: unknown): error is Error {
	return error instanceof Error;
}
