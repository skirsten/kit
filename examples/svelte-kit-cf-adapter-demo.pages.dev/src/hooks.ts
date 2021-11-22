import type { AdapterRequest } from '@sveltejs/adapter-cloudflare';
import type { Handle } from '@sveltejs/kit';

export type Locals = {
	continent?: string;
};

export const handle: Handle<Locals, unknown, AdapterRequest> = async ({ request, resolve }) => {
	request.locals.continent = request.adapter?.request.cf?.continent;

	const response = await resolve(request);

	if ('adapter' in response) {
		return { adapter: response.adapter };
	}

	return {
		...response,
		headers: {
			...response.headers,
			'x-custom-header': 'potato'
		}
	};
};
