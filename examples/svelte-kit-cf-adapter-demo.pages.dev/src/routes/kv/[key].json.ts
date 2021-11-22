import type { DefaultBody } from '@sveltejs/kit/types/endpoint';
import type { AdapterRequestHandler } from '@sveltejs//adapter-cloudflare';

type Env = {
	STORAGE: KVNamespace;
};

export const get: AdapterRequestHandler<unknown, unknown, DefaultBody, Env> = async ({
	adapter,
	params
}) => {
	if (!adapter) {
		return {
			status: 500,
			body: 'This route only works when using the cloudflare adapter'
		};
	}

	const response = await adapter.env.STORAGE.get(params.key);

	return {
		body: { value: response }
	};
};
