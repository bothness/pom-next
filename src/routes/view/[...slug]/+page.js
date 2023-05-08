import { redirect } from '@sveltejs/kit';
const prerender = false;

import { base } from '$app/paths';
import { csvParse, autoType } from "d3-dsv";
import { redirect_url } from '$lib/config';

export async function load({ fetch, params }) {
  // const config = { method: 'get', headers: { origin: 'http://localhost:5173' } };

  let res = await fetch(redirect_url);
  // let res = await fetch(new Request(redirect_url, config));
  let str = await res.text();
  let arr = csvParse(str, autoType);

  let par = params.slug.replace("/@", "|").replace("/","").split("|");
	let id = par[0];
	let coords = par[1] ? par[1].split(",") : null;
  let place = arr.find(p => +p.id_old == +id);

  let slug = place ? `${place.slug}/` : "";
  let hash = coords ? `#13.00,${coords[1]},${coords[0]}` : "";

  throw redirect(301, `${base}/en/maps/${slug}${hash}`);
}
