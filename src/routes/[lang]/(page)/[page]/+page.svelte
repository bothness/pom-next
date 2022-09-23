<script>
  export let data;
  let { title, content, description } = data;
  $: ({ title, content, description } = data);

  function render(content) {
    return content.replaceAll('src="/', 'src="https://palopenmaps.org/')
  }
</script>

<h1>{title}</h1>
{@html render(content)}