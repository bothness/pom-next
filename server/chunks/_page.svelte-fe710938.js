import { c as create_ssr_component, g as getContext, b as subscribe, e as escape, v as validate_component, d as add_styles } from './index-a44b6bb8.js';
import { b as base } from './paths-aa23c6e2.js';
import { S as Select_1 } from './Select-38b6d29c.js';
import { I as Icon } from './Icon-d665b3a7.js';

const css$1 = {
  code: ".tile.svelte-u5kurr{display:inline-flex;flex-direction:column;justify-content:flex-end;height:200px;background-color:#ddd;background-repeat:no-repeat;background-position:center;background-size:cover;border-radius:30px}.tile-text.svelte-u5kurr{background-color:rgba(0,0,0,0.4);color:#fff;padding:0 8px 10px 8px;border-radius:0 0 30px 30px}.tile-gradient.svelte-u5kurr{background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4));height:40px}",
  map: null
};
const Tile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image = null } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  $$result.css.add(css$1);
  return `<div class="${"tile svelte-u5kurr"}"${add_styles({
    "background-image": image ? `url("${image}")` : null
  })}><div class="${"tile-gradient svelte-u5kurr"}"></div>
  <div class="${"tile-text svelte-u5kurr"}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
const css = {
  code: ".grid.svelte-15v3o4w.svelte-15v3o4w{display:grid;grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)) !important;grid-gap:20px;margin:50px 0 0 0}.btn.svelte-15v3o4w.svelte-15v3o4w{background-color:white;color:#333;border:2px solid #333;height:50px;margin:4px 4px 0 0;padding:10px 12px;font-weight:bold;text-decoration:none;white-space:nowrap}.btn.rtl.svelte-15v3o4w.svelte-15v3o4w{margin:4px 0 0 4px !important}.btn-primary.svelte-15v3o4w.svelte-15v3o4w{background-color:#333;color:white}.btn.svelte-15v3o4w.svelte-15v3o4w:hover{background-color:black;border-color:black;color:white}.btn.svelte-15v3o4w>span.svelte-15v3o4w{margin-left:8px}.btn.rtl.svelte-15v3o4w>span.svelte-15v3o4w{margin-left:0 !important;margin-right:8px}h1.svelte-15v3o4w.svelte-15v3o4w{font-size:2.8em;line-height:1.25}p.text-big.svelte-15v3o4w.svelte-15v3o4w{font-size:1.4em;margin:20px 0 35px 0}.buttons.svelte-15v3o4w.svelte-15v3o4w{display:flex;flex-direction:row;flex-wrap:wrap-reverse}.buttons.svelte-15v3o4w>.svelte-15v3o4w{display:inline-block}.select.svelte-15v3o4w.svelte-15v3o4w{margin-top:3px;flex-grow:1;min-width:200px;max-width:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $lang, $$unsubscribe_lang;
  let $t, $$unsubscribe_t;
  let $rtl, $$unsubscribe_rtl;
  let { data } = $$props;
  let { places } = data;
  const lang = getContext("lang");
  $$unsubscribe_lang = subscribe(lang, (value) => $lang = value);
  const rtl = getContext("rtl");
  $$unsubscribe_rtl = subscribe(rtl, (value) => $rtl = value);
  const t = getContext("t");
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  ({ places } = data);
  $$unsubscribe_lang();
  $$unsubscribe_t();
  $$unsubscribe_rtl();
  return `<h1 class="${"svelte-15v3o4w"}"><!-- HTML_TAG_START -->${$t("Welcome to<br>Palestine Open Maps")}<!-- HTML_TAG_END --></h1>

<p class="${"text-big svelte-15v3o4w"}">${escape($t("Explore, search and download historical maps and spatial data on Palestine"))}</p>

<div class="${"buttons svelte-15v3o4w"}"><a class="${["btn btn-primary svelte-15v3o4w", $rtl ? "rtl" : ""].join(" ").trim()}" href="${escape(base, true) + "/" + escape($lang, true) + "/maps/"}">${validate_component(Icon, "Icon").$$render($$result, { type: "map", scale: 1.5 }, {}, {})}<span class="${"svelte-15v3o4w"}">${escape($t("Explore maps"))}</span></a>
  <a class="${["btn svelte-15v3o4w", $rtl ? "rtl" : ""].join(" ").trim()}" href="${escape(base, true) + "/" + escape($lang, true) + "/about/"}">${validate_component(Icon, "Icon").$$render($$result, { type: "info", scale: 1.5 }, {}, {})}<span class="${"svelte-15v3o4w"}">${escape($t("Read more"))}</span></a>
  <div class="${"select svelte-15v3o4w"}">${validate_component(Select_1, "Select").$$render(
    $$result,
    {
      items: places.features.map((f) => f.properties),
      colorBorder: "#333",
      colorIndicator: "#333"
    },
    {},
    {}
  )}</div></div>

<div class="${"grid svelte-15v3o4w"}">${validate_component(Tile, "Tile").$$render($$result, { image: base + "/img/tile-map1870.jpg" }, {}, {
    default: () => {
      return `${escape($t("Explore historical maps from the 1870s onwards"))}`;
    }
  })}
  ${validate_component(Tile, "Tile").$$render($$result, { image: base + "/img/tile-places.jpg" }, {}, {
    default: () => {
      return `${escape($t("View data on over 2,000 places, past and present"))}`;
    }
  })}
  ${validate_component(Tile, "Tile").$$render($$result, { image: base + "/img/tile-map1946.jpg" }, {}, {
    default: () => {
      return `${escape($t("Download hundreds of historical map sheets"))}`;
    }
  })}
  ${validate_component(Tile, "Tile").$$render(
    $$result,
    {
      image: base + "/img/tile-splitscreen.jpg"
    },
    {},
    {
      default: () => {
        return `${escape($t("View past and present maps side-by-side"))}`;
      }
    }
  )}
  ${validate_component(Tile, "Tile").$$render($$result, { image: base + "/img/tile-map3d.jpg" }, {}, {
    default: () => {
      return `${escape($t("View the topography of Palestine in 3D"))}`;
    }
  })}
  ${validate_component(Tile, "Tile").$$render($$result, { image: base + "/img/tile-overlay.jpg" }, {}, {
    default: () => {
      return `${escape($t("Overlay historical and present day maps"))}`;
    }
  })}
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-fe710938.js.map
