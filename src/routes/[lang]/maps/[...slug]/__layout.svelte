<script context="module">
	const prerender = true;
</script>
<script>
	import Header from "$lib/ui/Header.svelte";
</script>

<Header/>
<slot/>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>