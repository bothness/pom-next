<script>
	import "../app.css";
  import { writable } from 'svelte/store';
	import { setContext } from "svelte";
	import { page } from '$app/stores';
  import { base_url } from "$lib/config";
  import texts from "$lib/texts";
  import { i18n } from "$lib/utils";
  import Header from "$lib/ui/Header.svelte";

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
  <meta name="description" content="{$t('Explore, search and download historical maps and spatial data on Palestine')}" />
  <meta property="og:description" content="{$t('Explore, search and download historical maps and spatial data on Palestine')}" />
  <meta property="og:type" content="website" />
  <link rel="canonical" href="{base_url}{$page.url.pathname}" />
  <meta property="og:url" content="{base_url}{$page.url.pathname}" />
  <meta name="twitter:card" content="summary_large_image" />
	{#if $rtl}
	<style>
		html {
			direction: rtl;
		}
	</style>
	{/if}
</svelte:head>

<Header/>
<slot/>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>