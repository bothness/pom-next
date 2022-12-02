import { c as create_ssr_component, b as subscribe, g as getContext, d as add_styles, v as validate_component, e as escape, f as each, h as add_attribute } from './index-a44b6bb8.js';
import { b as base } from './paths-aa23c6e2.js';
import { p as page } from './stores-2cfacbe1.js';
import { p as pages } from './config-1e093cb8.js';
import { I as Icon } from './Icon-d665b3a7.js';

const css$1 = {
  code: ".linkbox.svelte-eypjpt{box-sizing:border-box;width:100%;border-top:1px solid grey;padding:3px 12px}.linkbox > a, .linkbox > label{display:block;color:var(--text-color, #444444);margin:10px 0}",
  map: null
};
const Links = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"linkbox svelte-eypjpt"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
const css = {
  code: "#menu.svelte-1ixsg91.svelte-1ixsg91{position:fixed;top:49px;width:320px;height:calc(100vh - 50px);overflow-y:auto;background-color:white;transition-duration:0.3s;z-index:1}.shadow.svelte-1ixsg91.svelte-1ixsg91{box-shadow:0 0 8px rgba(0,0,0,0.5)}a.active.svelte-1ixsg91.svelte-1ixsg91{color:black;font-weight:bold}a.svelte-1ixsg91 span.svelte-1ixsg91{margin:0 11px}#menu label{display:flex;flex-direction:row;align-items:flex-start}#menu label span{margin:0 11px}#menu input[type=radio], #menu input[type=checkbox]{margin:5px 1px 3px}",
  map: null
};
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $menu_active, $$unsubscribe_menu_active;
  let $rtl, $$unsubscribe_rtl;
  let $lang, $$unsubscribe_lang;
  let $page, $$unsubscribe_page;
  let $t, $$unsubscribe_t;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const lang = getContext("lang");
  $$unsubscribe_lang = subscribe(lang, (value) => $lang = value);
  const rtl = getContext("rtl");
  $$unsubscribe_rtl = subscribe(rtl, (value) => $rtl = value);
  const menu_active = getContext("menu_active");
  $$unsubscribe_menu_active = subscribe(menu_active, (value) => $menu_active = value);
  const t = getContext("t");
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$result.css.add(css);
  $$unsubscribe_menu_active();
  $$unsubscribe_rtl();
  $$unsubscribe_lang();
  $$unsubscribe_page();
  $$unsubscribe_t();
  return `<nav id="${"menu"}" class="${["svelte-1ixsg91", $menu_active ? "shadow" : ""].join(" ").trim()}"${add_styles({
    "left": $rtl ? "auto" : $menu_active ? "0" : "-320px",
    "right": !rtl ? "auto" : $menu_active ? "0" : "-320px"
  })}>${slots.default ? slots.default({}) : ``}
	${validate_component(Links, "Links").$$render($$result, {}, {}, {
    default: () => {
      return `<a href="${escape(base, true) + "/" + escape($lang, true) + "/"}" class="${[
        "svelte-1ixsg91",
        $page.url.pathname == `${base}/${$lang}/` ? "active" : ""
      ].join(" ").trim()}">${validate_component(Icon, "Icon").$$render($$result, { type: "home" }, {}, {})}<span class="${"svelte-1ixsg91"}">${escape($t("Home"))}</span></a>
		<a href="${escape(base, true) + "/" + escape($lang, true) + "/maps/"}" class="${["svelte-1ixsg91", $page.url.pathname.includes("maps") ? "active" : ""].join(" ").trim()}">${validate_component(Icon, "Icon").$$render($$result, { type: "map" }, {}, {})}<span class="${"svelte-1ixsg91"}">${escape($t("Explore maps"))}</span></a>
		${each(pages, (pg) => {
        return `<a href="${escape(base, true) + "/" + escape($lang, true) + "/" + escape(pg.key, true) + "/"}" class="${[
          "svelte-1ixsg91",
          $page.url.pathname == `${base}/${$lang}/${pg.key}/` ? "active" : ""
        ].join(" ").trim()}">${validate_component(Icon, "Icon").$$render($$result, { type: pg.icon }, {}, {})}<span class="${"svelte-1ixsg91"}">${escape($t(pg.label))}</span></a>`;
      })}
		<a href="${"https://medium.com/palopenmaps"}" class="${"svelte-1ixsg91"}">${validate_component(Icon, "Icon").$$render($$result, { type: "pen" }, {}, {})}<span class="${"svelte-1ixsg91"}">${escape($t("Blog"))}</span></a>
		<a href="${"mailto:hello@palopenmaps.org"}" class="${"svelte-1ixsg91"}">${validate_component(Icon, "Icon").$$render($$result, { type: "email" }, {}, {})}<span class="${"svelte-1ixsg91"}">${escape($t("Contact"))}</span></a>`;
    }
  })}
	${validate_component(Links, "Links").$$render($$result, {}, {}, {
    default: () => {
      return `${$rtl ? `<a${add_attribute("href", String($page.url).replace("ar", "en"), 0)} class="${"svelte-1ixsg91"}">${validate_component(Icon, "Icon").$$render($$result, { type: "globe" }, {}, {})}<span class="${"svelte-1ixsg91"}">English</span></a>` : `<a${add_attribute("href", String($page.url).replace("en", "ar"), 0)} class="${"svelte-1ixsg91"}">${validate_component(Icon, "Icon").$$render($$result, { type: "globe" }, {}, {})}<span class="${"svelte-1ixsg91"}">\u0639\u0631\u0628\u064A</span></a>`}`;
    }
  })}
</nav>`;
});

export { Links as L, Menu as M };
//# sourceMappingURL=Menu-9a427d44.js.map
