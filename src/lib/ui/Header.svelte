<script>
  import { getContext } from "svelte";
	import { base } from '$app/paths';
	import { page } from "$app/stores";
  import Icon from "$lib/ui/Icon.svelte";

  const menu_active = getContext("menu_active");
  const lang = getContext("lang");
  const rtl = getContext("rtl");
  const t = getContext("t");
</script>

<header>
	<button class="menu-toggle" class:menu-toggle-rtl={$rtl} on:click={() => (menu_active.set(!$menu_active))}>
		<Icon type={$menu_active ? 'close' : 'menu'} />
	</button>
	<div class="title"><a href="{base}/{$lang}/">{$t('Palestine Open Maps')}</a></div>
	<a class="lang-toggle"
		class:lang-toggle-rtl={$rtl}
		title="{$t('العربية')}"
		href="{String($page.url.href).replace(...($lang === 'en' ? ['/en', '/ar'] : ['/ar', '/en']))}">
		{$t('ع')}
	</a>
</header>

<style>
	header {
		position: fixed;
		display: flex;
		flex-direction: row;
		left: 0;
		right: 0;
		top: 0;
		height: 50px;
		background-color: #333;
		z-index: 2;
	}
	.title {
		box-sizing: border-box;
		width: 100%;
		display: flex;
		align-items: center;
		height: 50px;
		padding: 0 15px;
		font-weight: bold;
		font-size: 1.1em;
	}
	.title > a {
		color: white;
		text-decoration: none;
	}
	.menu-toggle, .lang-toggle {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		min-width: 50px;
		height: 50px;
		background-color: #333;
		color: white;
		border: none;
		border-right: 1px solid #777;
		border-radius: 0;
		font-size: 1.5em;
		cursor: pointer;
		text-decoration: none;
	}
	.lang-toggle {
		font-size: 1em;
		border: 0;
		/* border-left: 1px solid #777; */
	}
	.menu-toggle:hover, .lang-toggle:hover {
		background-color: #444;
	}
	.menu-toggle-rtl {
		left: auto !important;
		right: 100%;
		border-right: none !important;
		border-left: 1px solid #777;
	}
	.lang-toggle-rtl {
		/* border-right: 1px solid #777;
		border-left: none !important; */
	}
</style>