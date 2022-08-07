<script context="module">
  const prerender = true;

  import { csvParse, autoType } from "d3-dsv";

  export async function load({ fetch, params }) {
    let res = await fetch("https://docs.google.com/spreadsheets/d/1LejOouylx6u_TKF_1BxvV_B7uI34M4zIWyoc8LozATo/gviz/tq?tqx=out%3Acsv&sheet=redirect");
    let str = await res.text();
    let arr = csvParse(str, autoType);

    let slug = null;
    let place = arr.find(p => +p.id_old == +params.slug);

    if (place) slug = place.slug;

    return {
      props: {
        slug
      }
    };
  }
</script>
<script>
  import { onMount } from "svelte";
  import { base } from '$app/paths';
	import { goto } from "$app/navigation";

  export let slug;

  onMount(() => {
		if (slug) {
			goto(`${base}/en/maps/${slug}`);
		} else {
			goto(`${base}/en/maps/`);
		}
	});
</script>

<a href="{base}/en/maps/{slug ? `${slug}/` : ''}">Redirecting...</a>