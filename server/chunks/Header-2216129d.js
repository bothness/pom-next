import { c as create_ssr_component, g as getContext, b as subscribe, v as validate_component, e as escape } from './index-a44b6bb8.js';
import { b as base } from './paths-aa23c6e2.js';
import { I as Icon } from './Icon-d665b3a7.js';

const css = {
  code: "header.svelte-rlye9u.svelte-rlye9u{position:fixed;display:flex;flex-direction:row;left:0;right:0;top:0;height:50px;background-color:#333;z-index:2}.title.svelte-rlye9u.svelte-rlye9u{box-sizing:border-box;width:100%;display:flex;align-items:center;height:50px;padding:0 15px;font-weight:bold;font-size:1.1em}.title.svelte-rlye9u>a.svelte-rlye9u{color:white;text-decoration:none}.menu-toggle.svelte-rlye9u.svelte-rlye9u{display:inline-flex;justify-content:center;align-items:center;width:50px;min-width:50px;height:50px;background-color:#333;color:white;border:none;border-right:1px solid #777;border-radius:0;font-size:1.5em}.menu-toggle-rtl.svelte-rlye9u.svelte-rlye9u{left:auto !important;right:100%;border-right:none !important;border-left:1px solid #777}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $rtl, $$unsubscribe_rtl;
  let $menu_active, $$unsubscribe_menu_active;
  let $lang, $$unsubscribe_lang;
  let $t, $$unsubscribe_t;
  const menu_active = getContext("menu_active");
  $$unsubscribe_menu_active = subscribe(menu_active, (value) => $menu_active = value);
  const lang = getContext("lang");
  $$unsubscribe_lang = subscribe(lang, (value) => $lang = value);
  const rtl = getContext("rtl");
  $$unsubscribe_rtl = subscribe(rtl, (value) => $rtl = value);
  const t = getContext("t");
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$result.css.add(css);
  $$unsubscribe_rtl();
  $$unsubscribe_menu_active();
  $$unsubscribe_lang();
  $$unsubscribe_t();
  return `<header class="${"svelte-rlye9u"}"><button class="${["menu-toggle svelte-rlye9u", $rtl ? "menu-toggle-rtl" : ""].join(" ").trim()}">${validate_component(Icon, "Icon").$$render($$result, { type: $menu_active ? "close" : "menu" }, {}, {})}</button>
	<div class="${"title svelte-rlye9u"}"><a href="${escape(base, true) + "/" + escape($lang, true) + "/"}" class="${"svelte-rlye9u"}">${escape($t("Palestine Open Maps"))}</a></div>
</header>`;
});

export { Header as H };
//# sourceMappingURL=Header-2216129d.js.map
