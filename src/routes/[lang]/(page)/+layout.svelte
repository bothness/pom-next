<script>
  import { getContext } from "svelte";
  import { afterNavigate } from "$app/navigation";
  import { base_url } from "$lib/config";
  import Menu from "$lib/ui/Menu.svelte";
  import VPLogo from "$lib/ui/VPLogo.svelte";

  const rtl = getContext("rtl");
  const menu_active = getContext("menu_active");
	const t = getContext("t");

  afterNavigate(() => menu_active.set(false));
</script>

<svelte:head>
  <meta property="og:image" content="{base_url}/img/haifa-crop.jpg" />
</svelte:head>

<Menu/>
<main class:rtl={$rtl}>
  <article>
    <slot/>
  </article>
  <footer>
    {$t('Initiated and supported by')} <a href="https://visualizingpalestine.org" target="_blank" title={$t('Visualizing Palestine')}><VPLogo/></a>
  </footer>
</main>

<style>
  main {
    width: 640px;
    max-width: calc(100% - 24px);
    margin: 70px auto 0 64px;
  }
  main.rtl {
    margin: 70px 64px 0 auto !important;
  }
  @media (max-width: 716px) {
    main {
      margin: 70px 12px 0 auto;
    }
    main.rtl {
      margin: 70px auto 0 12px !important;
    }
  }
  footer {
    margin: 30px 0 12px;
    padding-top: 10px; 
    border-top: 1px solid black;
    color: #555;
    font-size: 0.9em;
  }
</style>