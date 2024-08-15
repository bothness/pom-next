// export const prerender = true;

import { base } from "$app/paths";
import { pages } from "$lib/config";
import { parse } from "marked";
import texts from "$lib/texts";
import { i18n } from "$lib/utils";

export async function load({ fetch, params }) {
  // const config = { method: 'get', headers: { origin: 'http://localhost:5173' } };

  const page = pages.find(p => p.key === params.page);
  const lang = params.lang;
  const t = (key) => i18n(key, texts, lang);
  const md = await (await fetch(`${base}/data/pages/${page.key}-${lang}.md`)).text();
  const html = parse(md.replaceAll("![](/img/", `![](${base}/img/`));

  return {
    title: t(page.label),
    content: html,
    description: t(page.description)
  };
}
