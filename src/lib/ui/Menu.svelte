<script>
  import { getContext } from "svelte";
  import { base } from "$app/paths";
	import { page } from "$app/stores";
	import { pages } from "$lib/config";
  import Links from "./Links.svelte";
  import Icon from "./Icon.svelte";

  const lang = getContext("lang");
	const rtl = getContext("rtl");
	const menu_active = getContext("menu_active");
	const t = getContext("t");

	$: console.log($page.url.pathname);
</script>

<nav id="menu" class:shadow={$menu_active} style:left={$rtl ? 'auto' : $menu_active ? '0' : '-320px'} style:right={!rtl ? 'auto' : $menu_active ? '0' : '-320px'}>
	<slot/>
	<Links>
		<a href="{base}/{$lang}/" class:active={$page.url.pathname == `${base}/${$lang}/`}><Icon type="home"/> {$t('Home')}</a>
		<a href="{base}/{$lang}/maps/" class:active={$page.url.pathname.includes('maps')}><Icon type="map"/> {$t('Explore maps')}</a>
		{#each pages as pg}
			<a href="{base}/{$lang}/{pg.key}/" class:active={$page.url.pathname == `${base}/${$lang}/${pg.key}/`}><Icon type="{pg.icon}"/> {$t(pg.label)}</a>
		{/each}
		<a href="https://medium.com/palopenmaps"><Icon type="pen"/> {$t('Blog')}</a>
		<a href="mailto:palopenmaps@gmail.com"><Icon type="email"/> {$t('Contact')}</a>
	</Links>
	<Links>
		{#if $rtl}
		<a href="{String($page.url).replace('ar', 'en')}"><Icon type="globe"/> English</a>
		{:else}
		<a href="{String($page.url).replace('en', 'ar')}"><Icon type="globe"/> عربي</a>
		{/if}
	</Links>
</nav>

<style>
  #menu {
		position: fixed;
		top: 49px;
		width: 320px;
		height: calc(100vh - 50px);
    overflow-y: auto;
		background-color: white;
		transition-duration: 0.3s;
		z-index: 1;
	}
	.shadow {
		box-shadow: 0 0 8px rgba(0,0,0,0.5);
	}
	a.active {
		color: black;
		font-weight: bold;
	}
</style>