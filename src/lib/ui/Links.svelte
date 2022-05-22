<div class="linkbox">
  <slot/>
</div>

<style>
	.linkbox {
		box-sizing: border-box;
		width: 100%;
		border-top: 1px solid lightgrey;
    padding: 3px 7px;
	}
  :global(.linkbox > a) {
    display: block;
    color: var(--text-color, #444444);
    margin: 10px 0;
  }
  :global(.linkbox > a > svg) {
    margin: 0 8px;
  }
</style>