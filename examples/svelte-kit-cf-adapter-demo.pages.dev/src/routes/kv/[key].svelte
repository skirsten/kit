<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch, page }) => {
		const key = page.params.key;
		const res = await fetch(`/kv/${key}.json`);
		if (res.ok) {
			const { value } = await res.json();
			return {
				props: { key, value }
			};
		}
		return {
			error: new Error('fetch failed')
		};
	};
</script>

<script lang="ts">
	export let key: string;
	export let value: string;
</script>

<h1>SvelteKit + cloudflare-adapter demo</h1>

<h2>This page is checking that the interal server-side fetch works</h2>

<p><code>{key}: {value}</code></p>
