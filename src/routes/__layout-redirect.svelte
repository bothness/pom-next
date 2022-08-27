<script context="module">
	const prerender = false;

	import { base } from '$app/paths';
	
	export async function load() {
		return {
			status: 302,
			redirect: `${base}/en/`
		};
	}
</script>