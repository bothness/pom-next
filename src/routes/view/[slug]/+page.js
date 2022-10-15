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

  let slug = null;
  let place = arr.find(p => +p.id_old == +params.slug);

  if (place) slug = place.slug;

  throw redirect(301, `${base}/en/maps/${slug}/`);
}
