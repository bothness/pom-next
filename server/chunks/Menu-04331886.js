import { c as create_ssr_component, a as subscribe, g as getContext, f as add_styles, v as validate_component, e as escape, h as each } from './index3-85f631df.js';
import { b as base } from './paths-05fee424.js';
import { p as page } from './stores-0d2b759c.js';
import { p as pages } from './config-d9327a31.js';
import { I as Icon } from './Icon-ace3e365.js';

const css$1 = {
  code: ".linkbox.svelte-eypjpt{box-sizing:border-box;width:100%;border-top:1px solid grey;padding:3px 12px}.linkbox > a, .linkbox > label{display:block;color:var(--text-color, #444444);margin:10px 0}",
  map: null
};
const Links = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="linkbox svelte-eypjpt">${slots.default ? slots.default({}) : ``}
</div>`;
});
const css = {
  code: "#menu.svelte-1hmgqby.svelte-1hmgqby{position:fixed;top:49px;width:320px;height:calc(100vh - 50px);overflow-y:auto;background-color:white;transition-duration:0.3s;z-index:1}.shadow.svelte-1hmgqby.svelte-1hmgqby{box-shadow:0 0 8px rgba(0,0,0,0.5)}a.active.svelte-1hmgqby.svelte-1hmgqby{color:black;font-weight:bold}a.svelte-1hmgqby span.svelte-1hmgqby{margin:0 11px}#menu label{display:flex;flex-direction:row;align-items:flex-start;width:100%}#menu label span{margin:0 11px}#menu label button{display:inline-flex;margin-inline-start:auto;border:none;background:none;padding:3px}#menu label button:disabled{color:#ccc}#menu input[type=radio], #menu input[type=checkbox]{margin:5px 1px 3px}",
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
  return `<nav id="menu" class="${["svelte-1hmgqby", $menu_active ? "shadow" : ""].join(" ").trim()}"${add_styles({
    "left": $rtl ? "auto" : $menu_active ? "0" : "-320px",
    "right": !rtl ? "auto" : $menu_active ? "0" : "-320px"
  })}>${slots.default ? slots.default({}) : ``}
	${validate_component(Links, "Links").$$render($$result, {}, {}, {
    default: () => {
      return `<a href="${escape(base, true) + "/" + escape($lang, true) + "/"}" class="${[
        "svelte-1hmgqby",
        $page.url.pathname == `${base}/${$lang}/` ? "active" : ""
      ].join(" ").trim()}">${validate_component(Icon, "Icon").$$render($$result, { type: "home" }, {}, {})}<span class="svelte-1hmgqby">${escape($t("Home"))}</span></a>
		<a href="${escape(base, true) + "/" + escape($lang, true) + "/maps/"}" class="${["svelte-1hmgqby", $page.url.pathname.includes("maps") ? "active" : ""].join(" ").trim()}">${validate_component(Icon, "Icon").$$render($$result, { type: "map" }, {}, {})}<span class="svelte-1hmgqby">${escape($t("Explore maps"))}</span></a>
		${each(pages, (pg) => {
        return `<a href="${escape(base, true) + "/" + escape($lang, true) + "/" + escape(pg.key, true) + "/"}" class="${[
          "svelte-1hmgqby",
          $page.url.pathname == `${base}/${$lang}/${pg.key}/` ? "active" : ""
        ].join(" ").trim()}">${validate_component(Icon, "Icon").$$render($$result, { type: pg.icon }, {}, {})}<span class="svelte-1hmgqby">${escape($t(pg.label))}</span></a>`;
      })}
		<a href="https://medium.com/palopenmaps" class="svelte-1hmgqby">${validate_component(Icon, "Icon").$$render($$result, { type: "pen" }, {}, {})}<span class="svelte-1hmgqby">${escape($t("Blog"))}</span></a>
		<a href="https://visualizingpalestine.org/vp-contacts#about" class="svelte-1hmgqby">${validate_component(Icon, "Icon").$$render($$result, { type: "email" }, {}, {})}<span class="svelte-1hmgqby">${escape($t("Contact"))}</span></a>`;
    }
  })}
	
</nav>`;
});

export { Links as L, Menu as M };
//# sourceMappingURL=Menu-04331886.js.map
