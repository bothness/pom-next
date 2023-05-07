import { c as getPlace } from './utils-feed60a2.js';
import './paths-05fee424.js';

async function load({ params, parent, fetch }) {
  const stuff = await parent();
  let slug = params.slug.replace("/", "");
  let places = stuff.places;
  let place;
  if (slug && places.features.find((f) => f.properties.slug == slug)) {
    place = await getPlace(slug, fetch);
  } else {
    place = null;
  }
  let layers = stuff.layers;
  let sheets = stuff.sheets;
  return { layers, sheets, places, place };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 7;
const component = async () => (await import('./_page.svelte-30d05f0a.js')).default;
const file = '_app/immutable/entry/_lang_-maps-_...slug_-page.svelte.3187cfce.js';
const universal_id = "src/routes/[lang]/maps/[...slug]/+page.js";
const imports = ["_app/immutable/entry/_lang_-maps-_...slug_-page.svelte.3187cfce.js","_app/immutable/chunks/index.43b57038.js","_app/immutable/chunks/paths.fb16c8e7.js","_app/immutable/chunks/utils.0043f724.js","_app/immutable/chunks/stores.492f0e6d.js","_app/immutable/chunks/singletons.0b31d6c9.js","_app/immutable/chunks/navigation.ac898540.js","_app/immutable/chunks/config.0867e37d.js","_app/immutable/chunks/Menu.7bd56f7a.js","_app/immutable/chunks/Icon.2e31b590.js","_app/immutable/chunks/Select.086a6562.js","_app/immutable/entry/_lang_-maps-_...slug_-page.js.44b75e3a.js","_app/immutable/chunks/utils.0043f724.js","_app/immutable/chunks/paths.fb16c8e7.js","_app/immutable/chunks/_page.7989a410.js"];
const stylesheets = ["_app/immutable/assets/_page.3e9f7f5e.css","_app/immutable/assets/Menu.7412e87c.css","_app/immutable/assets/Icon.2bb40ad1.css","_app/immutable/assets/Select.5afe8512.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=7-64d0d35b.js.map
