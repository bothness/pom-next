import { c as create_ssr_component, b as subscribe, s as setContext } from './index-a44b6bb8.js';
import { w as writable } from './index3-14853308.js';
import { p as page } from './stores-2cfacbe1.js';
import { t as texts } from './config-1e093cb8.js';
import { i as i18n } from './utils-a3586236.js';
import './paths-aa23c6e2.js';
import './autoType-090e08b5.js';

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $lang, $$unsubscribe_lang;
  let $page, $$unsubscribe_page;
  let $rtl, $$unsubscribe_rtl;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let lang = writable();
  $$unsubscribe_lang = subscribe(lang, (value) => $lang = value);
  setContext("lang", lang);
  let rtl = writable();
  $$unsubscribe_rtl = subscribe(rtl, (value) => $rtl = value);
  setContext("rtl", rtl);
  let t = writable();
  setContext("t", t);
  let menu_active = writable(false);
  setContext("menu_active", menu_active);
  {
    lang.set($page.params.lang ? $page.params.lang : "en");
  }
  {
    rtl.set($lang == "ar");
  }
  {
    t.set((key) => i18n(key, texts, $lang));
  }
  $$unsubscribe_lang();
  $$unsubscribe_page();
  $$unsubscribe_rtl();
  return `${$$result.head += `${$rtl ? `<style data-svelte="svelte-1vsb417">html {
			direction: rtl;
		}
	</style>` : ``}`, ""}

${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-a29a7f89.js.map
