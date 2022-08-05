<script>
  import { getContext, onMount, onDestroy } from 'svelte';
  
  export let exaggeration = 0.15;

  const { source } = getContext('source');
  const { getMap } = getContext('map');
	const map = getMap();

  onMount(() => {
    console.log("setting terrain");
    map.setTerrain({
      source,
      exaggeration
    });
  });

  onDestroy(() => {
		if (map) {
      map.setTerrain();
    }
	});
</script>