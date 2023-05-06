<script>
  import { getContext } from "svelte";
  import Select from "svelte-select";

  const lang = getContext("lang");
	const rtl = getContext("rtl");
	const t = getContext("t");
  
  export let value = null;
  export let items = [];
  export let colorBorder = "rgba(255,255,255,0)";
  export let colorIndicator = "grey";

	$: _items = [...items].sort((a, b) => a[`name_${$lang}`].localeCompare(b[`name_${$lang}`], $lang))
</script>

<div id="search" class:search-rtl={$rtl}
  style:--selectedItemPadding={0}
  style:--border="2px solid {colorBorder}"
	style:--indicatorFill="{colorIndicator}">
    <Select
      {value} items={_items}
      optionIdentifier="slug"
      labelIdentifier="name_{$lang}"
      placeholder="{$t('Find a place')}"
      on:select on:clear
      showIndicator
    />
</div>

<style>
  #search {
		width: 100%;
		height: 50px;
		margin-top: 1px;
		background-color: white;
		--height: 50px;
		--borderRadius: 0px;
	}
	/* :global(#search input) {
		width: calc(100% - 30px);
	} */
	.search-rtl {
		left: auto !important;
		right: 50px;
	}
	:global(.search-rtl .indicator) {
		right: auto !important;
		left: 10px;
	}
</style>