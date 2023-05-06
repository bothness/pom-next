<script>
  import { onMount, getContext } from "svelte";
  import { getCookie, setCookie } from "$lib/utils";

  const lang = getContext("lang");
	const t = getContext("t");

  let enabled = false;
  let banner = false;

  function checkPref() {
    const cookie = getCookie("ga");
    if (!cookie) banner = true;
    else if (cookie === "accept") enabled = true;
  }

  function setPref(option) {
    setCookie("ga", option, 365);
    checkPref();
  }

  function init() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-NEGGMBFE7X');
    console.log("Analytics enabled");
  }

  onMount(checkPref);
</script>

<svelte:head>
  {#if enabled}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-NEGGMBFE7X" on:load={init}></script>
  {/if}
</svelte:head>

{#if banner}
<div class="cookie-banner">
  <div style:padding="10px 0">
    {$t("We use Google Analytics to understand how people use Palestine Open Maps. Is this okay with you?")}
  </div>
  <div style:white-space="nowrap">
    <button class="btn btn-primary" on:click={() => setPref("accept")}>{$t("Accept")}</button>
    <button class="btn" on:click={() => setPref("reject")}>{$t("Reject")}</button>
  </div>
</div>
{/if}

<style>
  div.cookie-banner {
    position: fixed;
    z-index: 100;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255,255,255,0.9);
    border-top: 1px solid black;
    padding: 6px 16px 9px;
  }
  .btn {
    background-color: white;
    color: #333;
    border: 2px solid #333;
    height: 40px;
    margin: 0;
    padding: 0 12px;
    font-weight: bold;
    text-decoration: none;
    white-space: nowrap;
  }
  .btn + .btn {
    margin-block-start: 4px;
  }
  .btn-primary {
    background-color: #333;
    color: white;
  }
  .btn:hover {
    background-color: black;
    border-color: black;
    color: white;
  }
</style>