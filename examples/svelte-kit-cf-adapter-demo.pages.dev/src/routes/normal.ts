import type { RequestHandler } from '@sveltejs/kit';
import type { Locals } from 'src/hooks';

export const get: RequestHandler<Locals> = async (request) => {
	return {
		body: {
			continent: request.locals.continent
		}
	};
};
