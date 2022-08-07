<script context="module">
  const prerender = true;

  import { pages } from "$lib/config";

  async function getPage(url, fetch, attempts = 0) {
    let res = await fetch(url);
    attempts += 1;
    if (res.status == 200 || attempts >= 5) {
      return res;
    } else {
      return getPage(url, fetch, attempts);
    }
  }

  export async function load({ fetch, params }) {
    let page = pages.find(p => p.key == params.page);
    let res = await getPage(`https://palopenmaps.org/api/pages/${page.id[params.lang]}?format=json`, fetch);
    let json = await res.json();

    return {
      props: {
        title: json.title,
        content: json.content,
        description: json.meta_description
      }
    };
  }
</script>
<script>
  export let title, content, description;

  function render(content) {
    return content.replaceAll('src="/', 'src="https://palopenmaps.org/')
  }
</script>

<h1>{title}</h1>
{@html render(content)}