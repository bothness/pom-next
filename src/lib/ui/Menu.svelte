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
</script>

<nav id="menu" class:shadow={$menu_active} style:left={$rtl ? 'auto' : $menu_active ? '0' : '-320px'} style:right={!rtl ? 'auto' : $menu_active ? '0' : '-320px'}>
	<slot/>
	<Links>
		<a href="{base}/{$lang}/" class:active={$page.url.pathname == `${base}/${$lang}/`}><Icon type="home"/><span>{$t('Home')}</span></a>
		<a href="{base}/{$lang}/maps/" class:active={$page.url.pathname.includes('maps')}><Icon type="map"/><span>{$t('Explore maps')}</span></a>
		{#each pages as pg}
			<a href="{base}/{$lang}/{pg.key}/" class:active={$page.url.pathname == `${base}/${$lang}/${pg.key}/`}><Icon type="{pg.icon}"/><span>{$t(pg.label)}</span></a>
		{/each}
		<a href="https://medium.com/palopenmaps"><Icon type="pen"/><span>{$t('Blog')}</span></a>
		<a href="mailto:hello@palopenmaps.org"><Icon type="email"/><span>{$t('Contact')}</span></a>
	</Links>
	<Links>
		{#if $rtl}
		<a href="{String($page.url).replace('ar', 'en')}"><Icon type="globe"/><span>English</span></a>
		{:else}
		<a href="{String($page.url).replace('en', 'ar')}"><Icon type="globe"/><span>عربي</span></a>
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
	a span {
		margin: 0 11px;
	}
	:global(#menu label) {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		width: 100%;
	}
	:global(#menu label span) {
		margin: 0 11px;
	}
	:global(#menu label button) {
		display: inline-flex;
		margin-left: auto;
		border: none;
		background: none;
		padding: 3px;
	}
	:global(#menu label button:disabled) {
		color: #ccc;
	}
	:global(#menu input[type=radio], #menu input[type=checkbox]) {
		margin: 5px 1px 3px;
	}
</style>