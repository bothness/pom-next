import { c as create_ssr_component, v as validate_component } from './index-a44b6bb8.js';
import { H as Header } from './Header-2216129d.js';
import './paths-aa23c6e2.js';
import './Icon-d665b3a7.js';

const css = {
  code: "body{margin:0;padding:0}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-f06ed4d7.js.map
