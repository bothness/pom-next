<div class="linkbox">
  <slot/>
</div>

<style>
	.linkbox {
		box-sizing: border-box;
		width: 100%;
		border-top: 1px solid grey;
    padding: 3px 12px;
	}
  :global(.linkbox > a, .linkbox > label) {
    display: block;
    color: var(--text-color, #444444);
    margin: 10px 0;
  }
</style>