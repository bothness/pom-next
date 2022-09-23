<script context="module">
  const prerender = false;

  import { base } from '$app/paths';
  import { csvParse, autoType } from "d3-dsv";
  
  export async function load({ fetch, params }) {
    let res = await fetch("https://docs.google.com/spreadsheets/d/1LejOouylx6u_TKF_1BxvV_B7uI34M4zIWyoc8LozATo/gviz/tq?tqx=out%3Acsv&sheet=redirect");
    let str = await res.text();
    let arr = csvParse(str, autoType);

    let slug = null;
    let place = arr.find(p => +p.id_old == +params.slug);

    if (place) slug = place.slug;

    return {
			status: 302,
			redirect: `${base}/en/maps/${slug}/`
		};
  }
</script>