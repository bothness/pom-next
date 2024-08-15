<script>
  import { getContext } from "svelte";
	import { base_url } from "$lib/config";

  export let data;

	const t = getContext("t");
</script>

<svelte:head>
  <title>{data.title} - {$t('Palestine Open Maps')}</title>
  <meta property="og:title" content="{data.title} - {$t('Palestine Open Maps')}" />
  <meta property="og:image" content="{base_url}/img/haifa-crop.jpg" />
</svelte:head>

<h1>{data.title}</h1>
{#if data.content}
{@html data.content}
{/if}