<script>
	import { getContext } from "svelte";
	import Icon from "./Icon.svelte";

	const rtl = getContext("rtl");
	
	export let label = "";
	export let open = false;
</script>

<div class="accordion">
	<button class="label" class:label-rtl={$rtl} on:click={() => open = !open}>
		<Icon type="arrow" rotation="{open ? '90' : $rtl ? '180' : '0'}"/> {label}
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
		border-top: 1px solid grey;
	}
	.label {
		box-sizing: border-box;
		width: 100%;
		padding: 12px 7px;
		margin: 0;
		border: none;
		background: none;
		text-align: left;
		color: var(--text-color, #444444);
		font-weight: bold;
	}
	.label-rtl {
		text-align: right !important;
	}
	.content {
		box-sizing: border-box;
		width: 100%;
		padding: 12px 15px 16px 15px;
		border-top: 1px solid lightgrey;
	}
	:global(.accordion .label > svg) {
    margin: 0 8px;
	}
	:global(.accordion label) {
		display: block;
	}
	:global(.accordion hr) {
		border: 0;
		height: 0;
		border-bottom: 1px solid lightgrey;
	}
</style>