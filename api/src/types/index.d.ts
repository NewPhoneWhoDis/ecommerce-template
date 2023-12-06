import * as express from 'express';

declare module 'express-serve-static-core' {
	interface Response {
		cookie(name: string, val: string, options: express.CookieOptions): this;
	}
}
