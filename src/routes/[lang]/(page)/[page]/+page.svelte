<script>
  export let data;
  let { title, content, description } = data;
  $: ({ title, content, description } = data);

  function render(content) {
    return content.replaceAll('src="/', 'src="https://palopenmaps.org/')
  }
</script>

<svelte:head>
  <title>{title} - Palestine Open Maps</title>
  <meta property="og:title" content="{title} - Palestine Open Maps" />
</svelte:head>

<h1>{title}</h1>
{#if content}
{@html render(content)}
{/if}