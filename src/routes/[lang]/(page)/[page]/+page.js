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
  // const config = { method: 'get', headers: { origin: 'http://localhost:5173' } };

  let page = pages.find(p => p.key == params.page);
  let res = await getPage(`https://palopenmaps.org/api/pages/${page.id[params.lang]}?format=json`, fetch);
  let json = await res.json();

  return {
    title: json.title,
    content: json.content,
    description: json.meta_description
  };
}
