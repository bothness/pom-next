import { p as pages } from './config-d9327a31.js';
import './paths-05fee424.js';

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
const component = async () => (await import('./_page.svelte-1dca7db9.js')).default;
const file = '_app/immutable/entry/_lang_-(page)-_page_-page.svelte.05a83d24.js';
const universal_id = "src/routes/[lang]/(page)/[page]/+page.js";
const imports = ["_app/immutable/entry/_lang_-(page)-_page_-page.svelte.05a83d24.js","_app/immutable/chunks/index.43b57038.js","_app/immutable/entry/_lang_-(page)-_page_-page.js.84990e1c.js","_app/immutable/chunks/config.0867e37d.js","_app/immutable/chunks/paths.fb16c8e7.js","_app/immutable/chunks/_page.b2d81fc1.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=6-82aa9292.js.map
