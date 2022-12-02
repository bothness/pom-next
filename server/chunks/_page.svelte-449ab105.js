import { c as create_ssr_component, e as escape } from './index-a44b6bb8.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { title, content, description } = data;
  function render(content2) {
    return content2.replaceAll('src="/', 'src="https://palopenmaps.org/');
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ title, content, description } = data);
  return `<h1>${escape(title)}</h1>
${content ? `<!-- HTML_TAG_START -->${render(content)}<!-- HTML_TAG_END -->` : ``}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-449ab105.js.map
