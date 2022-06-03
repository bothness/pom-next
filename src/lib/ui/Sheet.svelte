<script>
  import Icon from "./Icon.svelte";
  export let sheet;
</script>

<div class="sheet">
  <div>
    <a href="{sheet.dropbox_link}">
      <img src="https://palopenmaps.org/static/images/thumbs/{sheet.layer}/{sheet.file_name}" alt="{sheet.name}">
    </a>
  </div>
  <div class="sheet-info">
    <h3>{sheet.name}</h3>
    <p>
      <strong>{sheet.author}</strong>
      Scale: 1:{sheet.scale.toLocaleString()}<br/>
      Date: {sheet.year}
    </p>
    <button name="Download sheet"><Icon type="download"/></button>
  </div>
</div>

<style>
  .sheet {
    display: flex;
    flex-direction: row;
    margin-top: 8px;
  }
  .sheet > div {
    flex: 1;
  }
  .sheet-info {
    padding-left: 8px;
  }
  img {
    width: 100%;
  }
  h3 {
    margin: 0;
  }
  p {
    font-size: 0.85em;
    margin: 0;
  }
  button {
    border: 1.5px solid black;
    border-radius: 50%;
    background-color: white;
    width: 32px;
    height: 32px;
    margin-top: 6px;
    font-size: 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  button:hover {
    color: white;
    background-color: black;
  }
</style>