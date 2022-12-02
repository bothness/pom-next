import { l as layers_url, s as statuses, a as locs_url, b as sheets_url } from './config-1e093cb8.js';
import { g as getPlaces, a as getSheets } from './utils-a3586236.js';
import './paths-aa23c6e2.js';
import './autoType-090e08b5.js';

async function load({ fetch }) {
  let places = await getPlaces(locs_url, statuses, fetch);
  let layers_res = await fetch(layers_url);
  let layers = await layers_res.json();
  layers = layers.filter((l) => l.is_active && !l.is_overlay);
  let sheets = await getSheets(sheets_url, layers, fetch);
  return { places, layers, sheets };
}

var _layout = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
const component = async () => (await import('./_layout.svelte-a29a7f89.js')).default;
const file = '_app/immutable/components/pages/_layout.svelte-cd2b0a0f.js';
const imports = ["_app/immutable/components/pages/_layout.svelte-cd2b0a0f.js","_app/immutable/chunks/index-bf619a6a.js","_app/immutable/chunks/singletons-6d08455d.js","_app/immutable/chunks/paths-6cd3a76e.js","_app/immutable/chunks/stores-85c99f0f.js","_app/immutable/chunks/config-5b04729c.js","_app/immutable/chunks/utils-b90f6efb.js","_app/immutable/chunks/autoType-ca12e421.js","_app/immutable/modules/pages/_layout.js-85ba551f.js","_app/immutable/chunks/config-5b04729c.js","_app/immutable/chunks/paths-6cd3a76e.js","_app/immutable/chunks/utils-b90f6efb.js","_app/immutable/chunks/autoType-ca12e421.js","_app/immutable/chunks/_layout-bedfe3a3.js"];
const stylesheets = ["_app/immutable/assets/_layout-48e5782a.css"];
const fonts = [];

export { component, file, fonts, imports, index, _layout as shared, stylesheets };
//# sourceMappingURL=0-22dd1c19.js.map
