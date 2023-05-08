<script>
  import { getContext } from "svelte";
	import { base_url } from "$lib/config";

  export let data;
  let { title, content, description } = data;
  $: ({ title, content, description } = data);

	const t = getContext("t");

  function render(content) {
    return content.replaceAll('src="/', 'src="https://palopenmaps.org/')
  }
</script>

<svelte:head>
  <title>{title} - {$t('Palestine Open Maps')}</title>
  <meta property="og:title" content="{title} - {$t('Palestine Open Maps')}" />
  <meta property="og:image" content="{base_url}/img/haifa-crop.jpg" />
</svelte:head>

<h1>{title}</h1>
{#if content}
{@html render(content)}
{/if}