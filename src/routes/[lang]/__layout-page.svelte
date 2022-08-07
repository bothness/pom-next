<script>
  import { getContext } from "svelte";
  import { afterNavigate } from "$app/navigation";
  import Header from "$lib/ui/Header.svelte";
  import Menu from "$lib/ui/Menu.svelte";

  const rtl = getContext("rtl");
  const menu_active = getContext("menu_active");

  afterNavigate(() => menu_active.set(false));
</script>

<Header/>
<Menu/>
<main class:rtl={$rtl}>
  <article>
    <slot/>
  </article>
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
</style>