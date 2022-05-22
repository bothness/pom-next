<script>
	import Icon from "./Icon.svelte";
	
	export let label = "";
	export let open = false;
	export let rtl = false;
</script>

<div class="accordion">
	<button class="label" class:label-rtl={rtl} on:click={() => open = !open}>
		<Icon type="arrow" rotation="{open ? '90' : rtl ? '180' : '0'}"/> {label}
	</button>
	{#if open}
	<div class="content">
		<slot/>
	</div>
	{/if}
</div>

<style>
	button {
		cursor: pointer;
	}
	.accordion {
		box-sizing: border-box;
		width: 100%;
		border-top: 1px solid lightgrey;
	}
	.label {
		box-sizing: border-box;
		width: 100%;
		padding: 8px 7px;
		margin: 0;
		border: none;
		background: none;
		text-align: left;
		color: var(--text-color, #444444);
	}
	.label-rtl {
		text-align: right !important;
	}
	:global(.label > svg) {
    margin: 0 8px;
	}
	.content {
		box-sizing: border-box;
		width: 100%;
		padding: 4px 15px 8px 15px;
	}
</style>