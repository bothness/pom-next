<script>
  export let label = "";
  export let hr = true;
</script>

<h3 class="section" class:hr>{label}</h3>

<style>
	h3.section {
		display: block;
		width: 100%;
		font-size: 0.8em;
		text-transform: uppercase;
		color: #222222;
		margin: 0;
	}
  .hr {
		border-bottom: 1px solid grey;
    margin-bottom: 4px !important;
  }
</style>