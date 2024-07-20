<script>
	import { base } from "$app/paths";
	import { overlays, overlayers } from "$lib/layers";
	import { onMount, getContext } from "svelte";
	import maplibre from "maplibre-gl";
	import debounce from "debounce";
	import { page } from '$app/stores';
	import { afterNavigate, goto } from "$app/navigation";
	import mapStyle from "$lib/style.json";
	import { makeDataset, makeColors } from "$lib/utils";
	import { statuses, maxBounds, base_url } from "$lib/config";
	import { Map, MapSource, MapLayer, MapTooltip } from "@onsvisual/svelte-maps";

	import MapCompare from "$lib/map/MapCompare.svelte";
	import MapTerrain from "$lib/map/MapTerrain.svelte";
	import Menu from "$lib/ui/Menu.svelte";
	import Select from "$lib/ui/Select.svelte";
	import Icon from '$lib/ui/Icon.svelte';
	import Accordion from '$lib/ui/Accordion.svelte';
	import Links from "$lib/ui/Links.svelte";
	import InfoBlock from "$lib/ui/InfoBlock.svelte";
	import InfoHeader from "$lib/ui/InfoHeader.svelte";
	import BarChart from '$lib/chart/BarChart.svelte';
	import Sheet from "$lib/ui/Sheet.svelte";

	export let data;
	let { layers, sheets, places, place } = data;
	$: ({ layers, sheets, places, place } = data);

	const lang = getContext("lang");
	const rtl = getContext("rtl");
	const t = getContext("t");
	const menu_active = getContext("menu_active");

	let layer = layers.find(l => l.is_default);
	let overlay = overlays.find(l => l.is_default);
	let sheets_selected = [];

	let map = {};
	let center = {};
	let zoom = {};
	let pitch = {};
	let bearing = {};
	let loaded = false; // Prevents map from being initiated until app is mounted
	let panel_status = place ? "place" : null; // Control status of #content panel (options: place, layer, null)
	let statuses_arr = Object.keys(statuses).map(key => ({key, ...statuses[key]}));
	let statuses_active = [...statuses_arr.filter(s => s.key != "Newly built")];
	let location = place ? {lng: place.geometry.coordinates[0], lat: place.geometry.coordinates[1], zoom: 14} : {bounds: [[34.43, 31.48], [34.49, 31.51]]};
	let toggles = {
		info: true,
		places: true,
		overlay: false,
		split: false,
		download: false,
		threed: false
	};
	let overlay_groups = {
		building: false,
		transport: true,
		place: true
	};
	$: filter = statuses_active ? ['any', ['in', 'status', ...statuses_active.map(s => s.key)]] : [];

	function doSelect(e) {
		const slug = e.detail.slug ? e.detail.slug : e.detail.id;
		const valid = places.features.find((f) => f.properties.slug == slug);
		if (valid && !(place && slug === place.properties.slug)) {
			menu_active.set(false);
			goto(`${base}/${$lang}/maps/${slug}/${window.location.search}`);
		}
	}

	async function unSelect(status = null) {
		panel_status = status;
		if (place) goto(`${base}/${$lang}/maps/${$page.url.search}${window.location.hash}`);
	}

	function filterSheets(sheets, layer, include = true) {
		let layers = layer == 15 ? [6,8,9] : [layer];
		return include ? sheets.filter(s => layers.includes(s.layer)) : sheets.filter(s => !layers.includes(s.layer));
	}

	function getDates(layer) {
		let start = layer.start_year ? +layer.start_year.split("-")[0]: null;
		let end = layer.end_year ? +layer.end_year.split("-")[0]: null;

		return start && end ? `${start}&ndash;${end}` : start ? start : end;
	}

	function updateHash() {
		if (center.left && zoom.left) {
			history.replaceState(null, "", `#${zoom.left.toFixed(2)},${center.left.lng.toFixed(4)},${center.left.lat.toFixed(4)}`);
		}
	}

	onMount(() => {
		readQuery();
		let hash = $page.url.hash.slice(1).split(",");
		if (hash[2]) {
			location = {lng: +hash[1], lat: +hash[2], zoom: +hash[0]};
		}
		if (maplibre.getRTLTextPluginStatus() == "unavailable") maplibre.setRTLTextPlugin('https://www.unpkg.com/@mapbox/mapbox-gl-rtl-text@0.2.3/mapbox-gl-rtl-text.js');
		loaded = true;
	});

	afterNavigate(() => {
		if (place) {
			if (map['left']) map['left'].flyTo({center: place.geometry.coordinates, zoom: 14});
			panel_status = "place";
		} else if (panel_status != "layer") {
			panel_status = null;
		}
	});

	function readQuery() {
		let params = $page.url.searchParams;
		if (params.get("basemap")) layer = layers.find(l => +l.id === +params.get("basemap"));
		if (params.get("overlay")) overlay = overlays.find(l => l.key === params.get("overlay"));
		if (params.get("toggles")) {
			let togs = params.get("toggles").split("|");
			Object.keys(toggles).forEach(key => {
				if (!["info", "download"].includes(key)) toggles[key] = togs.includes(key);
			});
		}
	}

	function updateQuery(layer, overlay, toggles) {
		let search = `?basemap=${layer.id}&overlay=${overlay.key}&toggles=${
			Object.keys(toggles).filter(key => toggles[key] && !["info", "download"].includes(key)).join('|')
		}`;
		let loc = $page.url;
		let url = `${loc.protocol}//${loc.host}${loc.pathname}${search}${loc.hash}`;
		history.replaceState(null, "", url);
	}

	$: if (loaded) updateQuery(layer, overlay, toggles);
</script>

<svelte:head>
	<title>{place ? place.properties[`name_${$lang}`] : 'Historical map viewer'} - {$t('Palestine Open Maps')}</title>
  <meta property="og:title" content="{place ? place.properties[`name_${$lang}`] : 'Explore historical maps'} - {$t('Palestine Open Maps')}" />
  <meta property="og:image" content="{base_url}/img/{place ? `og/${place.properties.slug}` : 'haifa-crop'}.jpg" />
	{#if $rtl}
	<style>
		.maplibregl-ctrl-top-right {
			left: 0;
			right: auto !important;
		}
		@media only screen and (max-width: 450px) {
			.maplibregl-ctrl-top-right {
				top: 50px !important;
			}
		}
		.maplibregl-ctrl-top-right .maplibregl-ctrl {
			margin: 10px 0 0 10px !important;
		}
		.selectContainer .selectedItem {
			padding: 0 0 0 20px !important;
		}
		.selectContainer .clearSelect {
			right: auto !important;
			left: 10px !important;
		}
	</style>
	{:else}
	<style>
		@media only screen and (max-width: 450px) {
			.maplibregl-ctrl-top-right {
				top: 50px !important;
			}
		}
	</style>
	{/if}
</svelte:head>

<Menu>
	{#if places}
	<Select
		value={place ? place.properties : null}
		items={places.features.map((f) => f.properties).sort((a, b) => a[`name_${$lang}`].localeCompare(b[`name_${$lang}`]))}
		on:select={doSelect}
		on:clear={unSelect}/>
	{/if}
	<Accordion label="{$t('Base maps')}">
		{#each layers as l}
		<label>
			<input type="radio" name="layers" bind:group={layer} value={l} />
			<span>{$t(l.name)}</span>
			<button on:click={() => {unSelect("layer"); menu_active.set(false);}} disabled={layer !== l}><Icon type="info"/></button>
		</label>
		{/each}
	</Accordion>
	<Accordion label="{$t('Overlays')}">
		<label><input type="checkbox" bind:checked={toggles.overlay} /><span>{$t('Show overlays')}</span></label>
		<hr/>
		{#each overlays as l}
		<label>
			<input type="radio" disabled={!toggles.overlay} name="overlays" bind:group={overlay} value={l} /> 
			<span>
				{$t(l.name)}
			</span>
			<button on:click={() => {unSelect("layer"); menu_active.set(false);}} disabled={!toggles.overlay || overlay !== l}><Icon type="info"/></button>
		</label>
		{/each}
		<hr/>
		<label><input type="checkbox" disabled={!toggles.overlay} bind:checked={overlay_groups.building} /><span>{$t('Buildings')}</span></label>
		<label><input type="checkbox" disabled={!toggles.overlay} bind:checked={overlay_groups.transport} /><span>{$t('Roads/rail')}</span></label>
		<label><input type="checkbox" disabled={!toggles.overlay} bind:checked={overlay_groups.place} /><span>{$t('Place names')}</span></label>
	</Accordion>
	<Accordion label="{$t('Places')}">
		<label><input type="checkbox" bind:checked={toggles.places} /><span>{$t('Show places')}</span></label>
		<hr/>
		{#each statuses_arr as s}
		<label><input type="checkbox" disabled={!toggles.places} bind:group={statuses_active} value={s} /><span><div class="bullet" style:background-color="{s.color}"/>{$t(s.name)}</span></label>
		{/each}
	</Accordion>
	<Accordion label="{$t('Download maps')}" bind:open={toggles.download}>
		{#if sheets_selected[0]}
		{#if filterSheets(sheets_selected, layer.id)[0]}
		<InfoHeader label="{$t('Sheets from this base map')}"/>
		{#each filterSheets(sheets_selected, layer.id) as sheet}
		<Sheet {sheet}/>
		{/each}
		{/if}
		{#if filterSheets(sheets_selected, layer.id, false)[0]}
		<hr/>
		<InfoHeader label="{$t('Sheets from other base maps')}"/>
		{#each filterSheets(sheets_selected, layer.id, false) as sheet}
		<Sheet {sheet}/>
		{/each}
		{/if}
		{:else}
		{$t('Click anywhere on the map to see sheets available to download covering that location')}
		{/if}
		<button class="btn btn-primary" style:display="block" on:click={() => {toggles.download = false; sheets_selected = [];}}>{$t('Close downloads')}</button>
	</Accordion>
	<Links>
		<label><input type="checkbox" bind:checked={toggles.split}/><span>{$t('Toggle split-screen')}</span></label>
		<label><input type="checkbox" bind:checked={toggles.threed} on:change={() => map.left.jumpTo(toggles.threed ? {pitch: 40} : {pitch: 0, bearing: 0})}/><span>{$t('Toggle 3D (experimental)')}</span></label>
	</Links>
</Menu>
<main>
	<div id="map-container">
		{#if loaded}
		<MapCompare mapLeft={map['left']} mapRight={map['right']}>
			{#each ['left', 'right'] as side}
			{#if side == 'left' || (side == 'right' && toggles.split)}
			<Map
				id="map-{side}"
				bind:map={map[side]}
				bind:center={center[side]}
				bind:zoom={zoom[side]}
				bind:pitch={pitch[side]}
				bind:bearing={bearing[side]}
				on:load={() => { if (side === 'left') map.left.on("moveend", debounce(updateHash, 500))}}
				style={mapStyle}
				location={side == 'left' || !zoom.left ? location : {...center.left, zoom: zoom.left, pitch: pitch.left, bearing: bearing.left}}
				minzoom={5}
				maxzoom={17}
				attribution={false}
				controls={['compass', 'pitch', 'locate']}
				options={{ maxBounds }}>
				<MapSource id="basemap" type="raster" url={side == 'left' ? layer.url : layers[0].url} maxzoom={17}>
					<MapLayer
						id="basemap"
						type="raster"
						paint={{"raster-saturation": toggles.overlay ? -0.50 : 0}}
						order="basemap-div"/>
				</MapSource>
				<MapSource id="overlay" type="vector" url={overlay.url} maxzoom={14}>
					{#each overlayers as l}
					<MapLayer
						id={l.id}
						type={l.type}
						sourceLayer={l['source-layer']}
						filter={l.filter ? l.filter : null}
						layout={l.layout ? l.layout : {}}
						paint={l.paint}
						minzoom={l.minzoom ? l.minzoom : null}
						maxzoom={l.maxzoom ? l.maxzoom : null}
						order={["building", "transport"].includes(l.metadata.group) ? "overlays-div" : null}
						visible={toggles.overlay && overlay_groups[l.metadata.group]}/>
					{/each}
				</MapSource>
				<MapSource id="places" type="geojson" data={places} promoteId="slug">
					<MapLayer
						id="places"
						type="circle"
						paint={{
							'circle-radius': {'base': 1, 'stops': [[5, 1], [12, 5]]},
							'circle-color': makeColors(statuses),
							'circle-stroke-color': ['case',
								['==', ['feature-state', 'selected'], true], 'black',
								['==', ['feature-state', 'hovered'], true], 'black',
								'rgba(0,0,0,0.2)'
							],
							'circle-stroke-width': {'base': 1, 'stops': [[5, 1], [12, 2]]}
							}}
						{filter}
						hover
						let:hovered
						select
						selected={place ? place.properties.slug : null}
						on:select={doSelect}
						visible={toggles.places}
						order="places-div">
						<MapTooltip
							content={hovered
								? places.features.find((f) => f.properties.slug == hovered).properties[`name_${$lang}`]
								: ''}/>
					</MapLayer>
				</MapSource>
				{#if toggles.download}
				<MapSource id="sheets" type="geojson" data={sheets} promoteId="id" maxzoom={14}>
					<MapLayer
						id="sheets-click"
						type="fill"
						paint={{
							'fill-color': 'magenta',
							'fill-opacity': 0.02
							}}
						select
						on:select={e => {sheets_selected = e.detail.event.features[0] ? e.detail.event.features.map(f => f.properties) : []; menu_active.set(true)}}/>
					<MapLayer
						id="sheets"
						type="line"
						filter={layer.id == 15 ? ["in", "layer", 6, 8, 9] : ["==", "layer", layer.id]}
						paint={{
							'line-color': "magenta",
							'line-width': 1
							}}/>
				</MapSource>
				{/if}
				<MapSource id="terrain" type="raster-dem" url="{"https://tile.nextzen.org/tilezen/terrain/v1/256/terrarium/{z}/{x}/{y}.png?api_key=_WbqOjpNS6-ug4JaHzHcdw"}">
					{#if toggles.threed}
					<MapLayer id="hillshade" type="hillshade" order="basemap-div" paint={{
						'hillshade-exaggeration': 0.1,
						'hillshade-accent-color': 'rgba(0,0,0,0)',
						'hillshade-shadow-color': 'rgba(0,0,0,0.7)',
						'hillshade-highlight-color': 'rgba(255,255,255,0.3)',
						'hillshade-illumination-direction': 155
						}}/>
					<MapTerrain/>
					{/if}
				</MapSource>
				{#if false}
				<MapSource id="villages" type="geojson" url="./data/villages.json">
					<MapLayer id="villages" type="line" paint={{'line-color': 'black', 'line-width': 1}}/>
				</MapSource>
				{/if}
			</Map>
			{/if}
			{/each}
		</MapCompare>
		{/if}
	</div>
	<div id="toggles" class:toggles-rtl={$rtl}>
		<label title="{$t('Toggle places')}" class:checked={toggles.places}><input type="checkbox" bind:checked={toggles.places} /><Icon type="marker" /></label>
		<label title="{$t('Toggle overlays')}" class:checked={toggles.overlay}><input type="checkbox" bind:checked={toggles.overlay} /><Icon type="layers" /></label>
		<label title="{$t('Toggle split-screen')}" class:checked={toggles.split}><input type="checkbox" bind:checked={toggles.split} /><Icon type="split" rotation={90}/></label>
		<label title="{$t('Toggle 3D (experimental)')}" class:checked={toggles.threed}><input type="checkbox" bind:checked={toggles.threed} on:change={() => map.left.jumpTo(toggles.threed ? {pitch: 40} : {pitch: 0, bearing: 0})}/><Icon type="3d"/></label>
		<button title="{$t('Show layer information')}" class:checked={toggles.info} on:click={() => {unSelect("layer"); menu_active.set(false);}}><Icon type="info" /></button>
	</div>
	{#if panel_status}
	<article id="content" class:content-rtl={$rtl}>
		<button class="content-toggle" class:content-toggle-rtl={$rtl} on:click={() => unSelect()}>
			<Icon type="close" />
		</button>
		{#if place && panel_status == 'place'}
			<h1>{place.properties[`name_${$lang}`]}</h1>
			<h2>
				{#if $lang == "ar"}
				{$t(place.properties.type)}
				{place.properties.change_2016 !== "Appropriated" ? $t(place.properties.group) : ""} {$t('in')}
				{$t('sub-district')} {$t(place.properties.subdistrict_1945)}
				{:else}
				{place.properties.change_2016 !== "Appropriated" ? place.properties.group : ""}
				{place.properties.change_2016 !== "Appropriated" ? place.properties.type.toLowerCase() : place.properties.type} in
				{place.properties.subdistrict_1945} {$t('sub-district')}
				{/if}
			</h2>
			<InfoBlock label="{$t('Change since 1948')}">
				<div>
					<div class="bullet" style:background-color="{statuses[place.properties.change_2016].color}"/>
					{$t(statuses[place.properties.change_2016].name)}
				</div>
			</InfoBlock>
			{#if place.properties.start || place.properties.end}
			<InfoBlock label="{$t('Key dates')}">
				{#if place.properties.start}
				<div>
					{$t('Founded')}<br/>
					<span class="text-lrg">{place.properties.start}</span>
				</div>
				{/if}
				{#if place.properties.end}
				<div>
					{$t('Depopulated')}<br/>
					<span class="text-lrg">{(new Date(place.properties.end)).toLocaleDateString($lang == 'ar' ? 'ar-PS' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
				</div>
				{/if}
			</InfoBlock>
			{/if}
			{#if place.properties.pop_1945 || place.properties.pop_2016}
			<InfoBlock label="{$t('Population')}">
				{#if place.properties.pop_1945}
				<div>
					1945<br/>
					<span class="text-lrg">{place.properties.pop_1945.toLocaleString()}</span>
				</div>
				{/if}
				{#if place.properties.pop_2016}
				<div>
					2016<br/>
					<span class="text-lrg">{place.properties.pop_2016.toLocaleString()}</span>
				</div>
				{/if}
			</InfoBlock>
			<InfoBlock label="{$t('Population by group')}" hr={false}>
				<BarChart data={makeDataset(place)} {t}/>
			</InfoBlock>
			{/if}
			{#if place.properties.poha}
			<InfoBlock label="{place.properties[`name_${$lang}`]} {$t('on Palestinian Oral History Archive')}">
				{#each place.properties.poha as item}
				<div><img src="https://libraries.aub.edu.lb/poha-viewer/content/thumbnails/{item.thumbnail}" class="thumbnail" alt=""/></div>
				<div>
					<a href="https://libraries.aub.edu.lb/poha/Record/{item.interview_id}" target="_blank">{item[`name_${$lang}`]}</a><br/>
					<small>{$t('Language')}: {$t(item.language)}</small><br/>
					<small>{$t('Duration')}: {item.duration}</small>
				</div>
				{/each}
			</InfoBlock>
			{/if}
			{#if place.properties.map_20k == 'yes' || place.properties.id_zo}
			<InfoBlock label="{place.properties[`name_${$lang}`]} {$t('on other sites')}">
				<div>
					{#if place.properties.url_pr}<a href="https://www.palestineremembered.com/{place.properties.url_pr}/{$lang == 'ar' ? 'ar/' : ''}" target="_blank">{$t('Palestine Remembered')}</a><br/>{/if}
					{#if place.properties.url_pq_en}<a href="https://www.palquest.org/{$lang}/place/{place.properties[`url_pq_${$lang}`]}/" target="_blank">{$t('Encyclopedia of the Palestine Question')}</a><br/>{/if}
					{#if place.properties.id_zo}<a href="https://www.zochrot.org/villages/village_details/{place.properties.id_zo}/{$lang}" target="_blank">{$t('Zochrot')}</a><br/>{/if}
					{#if place.properties.map_20k == 'yes'}<a href="https://today.visualizingpalestine.org/{place.properties.slug}" target="_blank">{$t('Palestine, Today')}</a>{/if}
				</div>
			</InfoBlock>
			{/if}
		{:else if panel_status == 'layer'}
			<h1>{$t(layer.name.slice(0, layer.name.lastIndexOf(',')))}</h1>
			<h2>
				{@html $t(layer.attribution.split(',')[0])}
			</h2>
			<InfoBlock label="{$t('Information')}">
				<div>
					{$t('Dates')}<br/>
					<span class="text-lrg">{@html getDates(layer)}</span>
				</div>
				{#if sheets.features.filter(s => s.properties.layer == layer.id).length > 0}
				<div>
					{$t('No. of map sheets')}<br/>
					<span class="text-lrg">{sheets.features.filter(s => s.properties.layer == layer.id).length}</span>
				</div>
				{/if}
			</InfoBlock>
			<InfoBlock label="{$t('Description')}">
				<div>{$t(layer.description)}</div>
			</InfoBlock>
			{#if toggles.overlay}
				<hr/>
				<h1>{$t(overlay.name)}</h1>
				<h2>
					{@html $t(overlay.attribution)}
				</h2>
				<InfoBlock label="{$t('Description')}">
					<div>{$t(overlay.description)}</div>
				</InfoBlock>
				{#if overlay.edit}
				<a href="{overlay.edit}{zoom.left + 1}/{center.left.lat}/{center.left.lng}" target="_blank"><Icon type="pen" title="{$t('edit layer')}"/></a>
				{/if}
			{/if}
		{/if}
	</article>
	{/if}
</main>

<style>
	h1 {
		font-weight: bold;
		margin: 10px 0 6px 0;
		line-height: 1.1;
	}
	h2 {
		font-weight: bold;
		font-size: 1em;
		margin: 0 0 20px 0;
	}
	button {
		cursor: pointer;
	}
	#map-container {
		position: fixed;
		top: 50px;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: #ddd;
	}
	#content {
		position: absolute;
		top: 0;
		box-sizing: border-box;
		left: 0;
		padding: 50px 15px 10px 15px;
		width: 408px;
		max-width: 100vw;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.8);
		overflow-y: auto;
		overflow-x: hidden;
	}
	.content-rtl {
		left: auto !important;
		right: 0;
	}
	#toggles {
		position: fixed;
		bottom: 10px;
		right: 10px;
	}
	.toggles-rtl {
		right: auto !important;
		left: 10px;
	}
	#toggles input {
		position: absolute;
		opacity: 0;
		border: none;
	}
	#toggles > label {
		position: relative;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		width: 32px;
		height: 32px;
		margin-right: 2px;
		background-color: grey;
		border-radius: 50%;
		font-size: 1.3em;
	}
	#toggles > button {
		position: relative;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		width: 32px;
		height: 32px;
		margin-right: 2px;
		background-color: white;
		border: none;
		border-radius: 50%;
		font-size: 1.3em;
	}
	.toggles-rtl > label {
		margin-left: 2px;
		margin-right: 0 !important;
	}
	.checked {
		background-color: white !important;
	}
	.content-toggle {
		position: absolute;
		top: 50px !important;
		left: calc(100% - 50px);
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 50px;
		background: none;
		border: none;
		font-size: 1.5em;
	}
	.content-toggle-rtl {
		left: auto !important;
		right: calc(100% - 50px);
	}
  .bullet {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
		margin-inline-end: 4px;
  }
	.text-lrg {
		font-size: 1.8em;
		font-weight: bold;
		line-height: 1;
	}
  .btn {
    background-color: white;
    color: #333;
    border: 2px solid #333;
    height: 40px;
    margin: 8px 0 0;
    padding: 5px 12px;
    font-weight: bold;
    text-decoration: none;
    white-space: nowrap;
  }
	.btn-primary {
		background-color: #333;
		color: white;
	}
  .btn:hover {
    background-color: black;
    border-color: black;
    color: white;
  }
	img.thumbnail {
    width: 100% !important;
  }
</style>
