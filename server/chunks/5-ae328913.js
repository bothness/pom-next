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
const component = async () => (await import('./_page.svelte-5f0a9304.js')).default;
const file = '_app/immutable/entry/_lang_-(page)-page.svelte.0477623b.js';
const universal_id = "src/routes/[lang]/(page)/+page.js";
const imports = ["_app/immutable/entry/_lang_-(page)-page.svelte.0477623b.js","_app/immutable/chunks/index.43b57038.js","_app/immutable/chunks/navigation.ac898540.js","_app/immutable/chunks/singletons.0b31d6c9.js","_app/immutable/chunks/paths.fb16c8e7.js","_app/immutable/chunks/Select.086a6562.js","_app/immutable/chunks/Icon.2e31b590.js","_app/immutable/entry/_lang_-(page)-page.js.17584ff5.js","_app/immutable/chunks/_page.09ba9e59.js"];
const stylesheets = ["_app/immutable/assets/_page.d54a0959.css","_app/immutable/assets/Select.5afe8512.css","_app/immutable/assets/Icon.2bb40ad1.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=5-ae328913.js.map
