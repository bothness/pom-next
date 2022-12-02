async function load({ params, parent }) {
  const stuff = await parent();
  let slug = params.slug.replace("/", "");
  let places = stuff.places;
  let place = places.features.find((f) => f.properties.slug == slug);
  let layers = stuff.layers;
  let sheets = stuff.sheets;
  return { layers, sheets, places, place };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 7;
const component = async () => (await import('./_page.svelte-fdbea99d.js')).default;
const file = '_app/immutable/components/pages/_lang_/maps/_...slug_/_page.svelte-226867fe.js';
const imports = ["_app/immutable/components/pages/_lang_/maps/_...slug_/_page.svelte-226867fe.js","_app/immutable/chunks/index-bf619a6a.js","_app/immutable/chunks/paths-6cd3a76e.js","_app/immutable/chunks/stores-85c99f0f.js","_app/immutable/chunks/singletons-6d08455d.js","_app/immutable/chunks/navigation-c2e0a450.js","_app/immutable/chunks/utils-b90f6efb.js","_app/immutable/chunks/autoType-ca12e421.js","_app/immutable/chunks/config-5b04729c.js","_app/immutable/chunks/Menu-90b51deb.js","_app/immutable/chunks/Icon-5b089085.js","_app/immutable/chunks/Select-91c5d9f4.js","_app/immutable/modules/pages/_lang_/maps/_...slug_/_page.js-ace3710b.js","_app/immutable/chunks/_page-ade9e6c3.js"];
const stylesheets = ["_app/immutable/assets/_page-fc487034.css","_app/immutable/assets/Menu-ae2c72bb.css","_app/immutable/assets/Icon-2bb40ad1.css","_app/immutable/assets/Select-d7b20449.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page as shared, stylesheets };
//# sourceMappingURL=7-2c35a3ce.js.map
