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