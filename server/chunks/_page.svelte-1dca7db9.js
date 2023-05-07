import { c as create_ssr_component, e as escape } from './index3-85f631df.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { title, content, description } = data;
  function render(content2) {
    return content2.replaceAll('src="/', 'src="https://palopenmaps.org/');
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ title, content, description } = data);
  return `${$$result.head += `<!-- HEAD_svelte-2i6yl7_START -->${$$result.title = `<title>${escape(title)} - Palestine Open Maps</title>`, ""}<meta property="og:title" content="${escape(title, true) + " - Palestine Open Maps"}"><!-- HEAD_svelte-2i6yl7_END -->`, ""}

<h1>${escape(title)}</h1>
${content ? `<!-- HTML_TAG_START -->${render(content)}<!-- HTML_TAG_END -->` : ``}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-1dca7db9.js.map
