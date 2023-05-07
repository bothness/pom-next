import { l as layers_url, s as sheets_url, a as locs_url } from './config-d9327a31.js';
import { g as getPlaces, a as getLayers, b as getSheets } from './utils-feed60a2.js';
import './paths-05fee424.js';

async function load({ fetch }) {
  const config = { method: "get" };
  let places = await getPlaces(locs_url, fetch);
  let layers = await getLayers(new Request(layers_url, config), fetch);
  let sheets = await getSheets(new Request(sheets_url, config), layers, fetch);
  return { places, layers, sheets };
}

var _layout = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
const component = async () => (await import('./_layout.svelte-40a42e3b.js')).default;
const file = '_app/immutable/entry/_layout.svelte.4f5b455e.js';
const universal_id = "src/routes/+layout.js";
const imports = ["_app/immutable/entry/_layout.svelte.4f5b455e.js","_app/immutable/chunks/index.43b57038.js","_app/immutable/chunks/singletons.0b31d6c9.js","_app/immutable/chunks/paths.fb16c8e7.js","_app/immutable/chunks/stores.492f0e6d.js","_app/immutable/chunks/config.0867e37d.js","_app/immutable/chunks/utils.0043f724.js","_app/immutable/chunks/Icon.2e31b590.js","_app/immutable/entry/_layout.js.8ad301c5.js","_app/immutable/chunks/config.0867e37d.js","_app/immutable/chunks/paths.fb16c8e7.js","_app/immutable/chunks/utils.0043f724.js","_app/immutable/chunks/_layout.07d86ef5.js"];
const stylesheets = ["_app/immutable/assets/_layout.5cd9a6ec.css","_app/immutable/assets/Icon.2bb40ad1.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _layout as universal, universal_id };
//# sourceMappingURL=0-0bdf384b.js.map
