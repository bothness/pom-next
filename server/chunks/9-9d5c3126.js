import { r as redirect } from './index2-afbea628.js';
import { b as base } from './paths-aa23c6e2.js';
import { r as redirect_url } from './config-1e093cb8.js';
import { c as csvParse, a as autoType } from './autoType-090e08b5.js';

async function load({ fetch, params }) {
  let res = await fetch(redirect_url);
  let str = await res.text();
  let arr = csvParse(str, autoType);
  let slug = null;
  let place = arr.find((p) => +p.id_old == +params.slug);
  if (place)
    slug = place.slug;
  throw redirect(301, `${base}/en/maps/${slug}/`);
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 9;
const imports = ["_app/immutable/modules/pages/view/_slug_/_page.js-38ecdcef.js","_app/immutable/chunks/index-3dfdb732.js","_app/immutable/chunks/control-ba37bfb4.js","_app/immutable/chunks/paths-6cd3a76e.js","_app/immutable/chunks/config-5b04729c.js","_app/immutable/chunks/autoType-ca12e421.js","_app/immutable/chunks/_page-03b2c6d5.js"];
const stylesheets = [];
const fonts = [];

export { fonts, imports, index, _page as shared, stylesheets };
//# sourceMappingURL=9-9d5c3126.js.map
