<script>
  import { getContext } from "svelte";
  import { base } from "$app/paths";
  import Icon from "./Icon.svelte";
  export let sheet;

	const t = getContext("t");
</script>

<div class="sheet">
  <div>
    <a href="{sheet.dropbox_link}">
      <img src="{base}/img/thumb/{sheet.layer}/{sheet.file_name}" alt="{sheet.name}">
    </a>
  </div>
  <div class="sheet-info">
    <h3>{sheet.name}</h3>
    <p>
      <strong>{$t(sheet.author)}</strong>
      {$t('Scale')}: 1:{sheet.scale.toLocaleString()}<br/>
      {$t('Date')}: {sheet.year}
    </p>
    <a name="Download sheet" href="{sheet.dropbox_link}">
      <Icon type="download"/>
      <span>{$t('Download')}</span>
    </a>
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
    padding-inline-start: 8px;
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
  .sheet-info > a {
    display: inline-flex;
    align-items: center;
    background-color: white;
    color: #333;
    border: 2px solid #333;
    height: 34px;
    margin: 8px 0 0;
    padding: 2px 8px;
    text-decoration: none;
    white-space: nowrap;
    font-size: 0.85em;
    font-weight: bold;
  }
  .sheet-info > a:hover {
    color: white;
    background-color: black;
  }
  .sheet-info > a > span {
    margin-left: 4px;
  }
</style>