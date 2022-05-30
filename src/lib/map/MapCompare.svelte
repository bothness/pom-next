<script>
	import Compare from '$lib/vendor/compare';
	
	export let mapLeft;
	export let mapRight;
	
	let mapCompare;
	let mapsContainer;
	let mapsLoaded = false;
	
	$: if (!mapsLoaded && window && mapsContainer && mapLeft && mapRight) {
		mapCompare = new Compare(mapLeft, mapRight, mapsContainer, {});
		mapsLoaded = true;
	}
	
	$: if (mapsLoaded && (!mapLeft || !mapRight)) {
		mapCompare.remove();
		mapCompare = null;
		mapsLoaded = false;
	}
</script>

<svelte:head>
  <link href="https://unpkg.com/@maplibre/maplibre-gl-compare@0.5.0/dist/maplibre-gl-compare.css" rel="stylesheet"/>
</svelte:head>

<div id="comparison-container" bind:this={mapsContainer}>
	<slot/>
</div>

<style>
  #comparison-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  :global(.map) {
    position: absolute !important;
    top: 0;
    bottom: 0;
  }
</style>