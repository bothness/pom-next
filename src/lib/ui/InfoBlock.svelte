<script>
  export let label = "";
  export let hr = true;
</script>

<h3 class="section" class:hr>{label}</h3>
<div class="content">
  <slot/>
</div>

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
  .content {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 8px;
    margin-bottom: 16px;
  }
</style>