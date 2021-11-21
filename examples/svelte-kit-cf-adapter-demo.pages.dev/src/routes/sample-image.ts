import type { AdapterRequestHandler } from '@sveltejs/adapter-cloudflare';

export const get: AdapterRequestHandler = async (request) => {
	if (request.adapter) {
		const colo = request.adapter.request.cf?.colo;

		request.adapter.ctx.waitUntil(
			(async () => {
				// Do stuff here
				return;
			})()
		);

		return {
			adapter: {
				response: fetch(
					`https://fakeimg.pl/440x230/282828/eae0d0/?retina=1&text=${encodeURIComponent(
						`proxied in ${colo}`
					)}`,
					{ cf: { cacheEverything: true, cacheTtl: 120 } }
				)
			}
		};
	}
	return {
		status: 302,
		headers: {
			location: `https://fakeimg.pl/440x230/282828/eae0d0/?retina=1&text=${encodeURIComponent(
				'fallback to redirect'
			)}`
		}
	};
};
