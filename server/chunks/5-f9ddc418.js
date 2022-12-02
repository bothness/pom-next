async function load({ parent }) {
  const stuff = await parent();
  let places = stuff.places;
  return { places };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
const component = async () => (await import('./_page.svelte-fe710938.js')).default;
const file = '_app/immutable/components/pages/_lang_/(page)/_page.svelte-49b55134.js';
const imports = ["_app/immutable/components/pages/_lang_/(page)/_page.svelte-49b55134.js","_app/immutable/chunks/index-bf619a6a.js","_app/immutable/chunks/navigation-c2e0a450.js","_app/immutable/chunks/singletons-6d08455d.js","_app/immutable/chunks/paths-6cd3a76e.js","_app/immutable/chunks/Select-91c5d9f4.js","_app/immutable/chunks/Icon-5b089085.js","_app/immutable/modules/pages/_lang_/(page)/_page.js-1e0f019c.js","_app/immutable/chunks/_page-1f78425c.js"];
const stylesheets = ["_app/immutable/assets/_page-d54a0959.css","_app/immutable/assets/Select-d7b20449.css","_app/immutable/assets/Icon-2bb40ad1.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page as shared, stylesheets };
//# sourceMappingURL=5-f9ddc418.js.map
