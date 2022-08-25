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
<script>
	import "../app.css";
  import { writable } from 'svelte/store';
	import { setContext } from "svelte";
	import { page } from '$app/stores';
  import { texts } from "$lib/config";
  import { i18n } from "$lib/utils";

  let lang = writable();
  $: lang.set($page.params.lang ? $page.params.lang : "en");
  setContext("lang", lang);

  let rtl = writable();
  $: rtl.set($lang == "ar");
  setContext("rtl", rtl);

  let t = writable();
  $: t.set((key) => i18n(key, texts, $lang));
  setContext("t", t);

  let menu_active = writable(false);
  setContext("menu_active", menu_active);
</script>

<svelte:head>
	{#if $rtl}
	<style>
		html {
			direction: rtl;
		}
	</style>
	{/if}
</svelte:head>

<slot/>