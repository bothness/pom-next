<script>
  import { base } from "$app/paths";
	import { page } from '$app/stores';
	import { i18n } from "$lib/utils";
  import { texts } from "$lib/config";
  import Links from "$lib/ui/Links.svelte";
  import Icon from "$lib/ui/Icon.svelte";

  let menu_active = false;

  $: lang = $page.params.lang;
  $: rtl = lang == "ar";
	$: t = (key) => i18n(key, texts, lang);
</script>

<main>
  <nav id="menu" style:left={rtl ? 'auto' : menu_active ? '0' : '-320px'} style:right={lang != 'ar' ? 'auto' : menu_active ? '0' : '-320px'}>
    <button class="menu-toggle" class:menu-toggle-rtl={rtl} on:click={() => (menu_active = !menu_active)}>
      <Icon type={menu_active ? 'close' : 'menu'} />
    </button>
    <Links>
      <a href="{base}/{lang}/"><Icon type="map"/> View maps</a>
      <a href="{base}/{lang}/about/"><Icon type="info"/> {t('about')}</a>
      <a href="{base}/{lang}/blog/"><Icon type="pen"/> Blog</a>
      <a href="{base}/{lang}/support/"><Icon type="heart"/> Support</a>
      <a href="{base}/{lang}/contact/"><Icon type="email"/> Contact</a>
    </Links>
    <Links>
      {#if lang == 'ar'}
      <a href="{String($page.url).replace(lang, 'en')}"><Icon type="globe"/> English</a>
      {:else}
      <a href="{String($page.url).replace(lang, 'ar')}"><Icon type="globe"/> عربي</a>
      {/if}
    </Links>
  </nav>
  <div class="container">
    <header>
      <div class="title">{t('pom')}</div>
    </header>
    <article>
      <slot/>
    </article>
  </div>
</main>

<style>
  #menu {
		position: absolute;
		top: 0;
		width: 320px;
		min-height: 100%;
		background-color: white;
		transition-duration: 0.3s;
	}
  .menu-toggle {
		position: absolute;
		top: 0;
		left: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 50px;
		background-color: white;
		border: none;
		border-radius: 0;
		font-size: 1.5em;
	}
	.menu-toggle-rtl {
		left: auto !important;
		right: 100%;
	}
  .container {
    width: 980px;
    max-width: calc(100% - 24px);
    margin: 0 auto;
  }
  .title {
		width: 100%;
		display: flex;
		align-items: center;
		height: 50px;
		font-weight: bold;
		font-size: 1.1em;
	}
</style>