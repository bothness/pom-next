import { p as pages } from './config-1e093cb8.js';
import './paths-aa23c6e2.js';

async function getPage(url, fetch, attempts = 0) {
  let res = await fetch(url);
  attempts += 1;
  if (res.status == 200 || attempts >= 5) {
    return res;
  } else {
    return getPage(url, fetch, attempts);
  }
}
async function load({ fetch, params }) {
  let page = pages.find((p) => p.key == params.page);
  let res = await getPage(`https://palopenmaps.org/api/pages/${page.id[params.lang]}?format=json`, fetch);
  let json = await res.json();
  return {
    title: json.title,
    content: json.content,
    description: json.meta_description
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
const component = async () => (await import('./_page.svelte-449ab105.js')).default;
const file = '_app/immutable/components/pages/_lang_/(page)/_page_/_page.svelte-e859c7d3.js';
const imports = ["_app/immutable/components/pages/_lang_/(page)/_page_/_page.svelte-e859c7d3.js","_app/immutable/chunks/index-bf619a6a.js","_app/immutable/modules/pages/_lang_/(page)/_page_/_page.js-2f9e102a.js","_app/immutable/chunks/config-5b04729c.js","_app/immutable/chunks/paths-6cd3a76e.js","_app/immutable/chunks/_page-3541b278.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _page as shared, stylesheets };
//# sourceMappingURL=6-f644a398.js.map
