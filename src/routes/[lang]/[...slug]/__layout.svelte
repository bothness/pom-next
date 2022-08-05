<script context="module">
	const prerender = true;

	import { locs_url, layers_url, sheets_url, statuses } from "$lib/config";
	import { getPlaces, getSheets } from "$lib/utils";
  
	export async function load({ fetch }) {
		// Load places spreadsheet and convert to geojson
		let places = await getPlaces(locs_url, statuses, fetch);
		let layers_res = await fetch(layers_url);
		let layers = await layers_res.json();
		layers = layers.filter(l => l.is_active && !l.is_overlay);
		let sheets = await getSheets(sheets_url, layers, fetch);

		return {
			stuff: { places, layers, sheets }
		};
	}
</script>

<main>
	<slot/>
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}
	main {
		position: relative;
		width: 100vw;
		height: 100vh;
	}
</style>