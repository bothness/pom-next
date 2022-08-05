<script context="module">
	const prerender = true;

	import { base } from "$app/paths";
	import { overlays, overlayers } from "$lib/layers";
  
	export async function load({ params, stuff }) {
		let lang = params.lang;
		let slug = params.slug.replace("/","");

		let places = stuff.places; // places is loaded once in __layout.svelte and passed to this route
		let place = places.features.find(f => f.properties.slug == slug);

		let layers = stuff.layers; // layers loaded in same way as places
		let sheets = stuff.sheets; // sheets ditto

		return {
			props: { lang, layers, sheets, places, place }
		};
	}
</script>

<script>
	import { onMount } from "svelte";
	import maplibre from "maplibre-gl"
	import { page } from '$app/stores';
	import { afterNavigate, goto } from "$app/navigation";
	import mapStyle from "$lib/style.json";
	import { makeDataset, i18n, sleep } from "$lib/utils";
	import { statuses } from "$lib/config";
	import { Map, MapSource, MapLayer, MapTooltip } from "@onsvisual/svelte-maps";
	import MapCompare from "$lib/map/MapCompare.svelte";
	import MapTerrain from "$lib/map/MapTerrain.svelte";
	import Select from 'svelte-select';
	import Icon from '$lib/ui/Icon.svelte';
	import Accordion from '$lib/ui/Accordion.svelte';
	import Links from "$lib/ui/Links.svelte";
	import InfoBlock from "$lib/ui/InfoBlock.svelte";
	import BarChart from '$lib/chart/BarChart.svelte';
	import Sheet from "$lib/ui/Sheet.svelte";

	export let lang, layers, sheets, places, place;

	let layer = layers.find(l => l.is_default);
	let overlay = overlays.find(l => l.is_default);
	let sheets_selected = [];

	let map = {};
	let center = {};
	let zoom = {};
	let pitch = {};
	let bearing = {};
	let showMap = false; // Prevents map from being initiated until app is mounted
	let menu_active = false;
	let panel_status = place ? "place" : null; // Control status of #content panel (options: place, layer, null)
	let statuses_arr = Object.keys(statuses).map(key => ({key, ...statuses[key]}));
	let statuses_active = [...statuses_arr.filter(s => s.key != "Newly built")];
	let location = place ? {lng: place.geometry.coordinates[0], lat: place.geometry.coordinates[1], zoom: 13} : {bounds: [[34.75, 31.75], [35.25, 32.25]]};
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
	$: filter = statuses_active ? ['any', ['in', 'change_2016', ...statuses_active.map(s => s.key)]] : [];

	function doSelect(e) {
		let place = places.features.find((f) => f.properties.id == e.detail.id);
		menu_active = false;
		goto(`${base}/${lang}/${place.properties.slug}/`);
	}

	async function unSelect(status = null) {
		panel_status = status;
		if (place) goto(`${base}/${lang}/`);
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

	function updateHash(center, zoom) {
		if (center && zoom) {
			history.replaceState(undefined, undefined, `#${zoom.toFixed(2)},${center.lng.toFixed(4)},${center.lat.toFixed(4)}`);
		}
	}

	onMount(() => {
		let hash = $page.url.hash.slice(1).split(",");
		if (hash[2]) {
			location = {lng: +hash[1], lat: +hash[2], zoom: +hash[0]};
		}
		if (maplibre.getRTLTextPluginStatus() == "unavailable") maplibre.setRTLTextPlugin('https://www.unpkg.com/@mapbox/mapbox-gl-rtl-text@0.2.3/mapbox-gl-rtl-text.js');
		showMap = true;
	});

	afterNavigate(() => {
		if (place) {
			if (map['left']) map['left'].flyTo({center: place.geometry.coordinates, zoom: 13});
			panel_status = "place";
		} else if (panel_status != "layer") {
			panel_status = null;
		}
	});

	$: rtl = lang == "ar";
	$: updateHash(center.left, zoom.left);

	const texts = {
		"en": {
			"pom": "Palestine Open Maps",
			"baseMaps": "Base maps",
			"overlays": "Overlays", 
			"localities": "Localities",
			"getUpdates": "Get updates",
			"download": "Download maps",
			"about": "About"
		}, 
		"ar": {
			"pom": "خرائط فلسطين المفتوحة",
			"baseMaps": "الخرائط",
			"overlays": "الطبقات الأخرى", 
			"localities": "البلدات",
			"getUpdates": "تابعوا آخر التحديثات",
			"download": "تنزيل الخرائط",
			"about": "عن المشروع"
		}
	};
	$: t = (key) => i18n(key, texts, lang);
</script>

<svelte:head>
	{#if rtl}
	<style>
		html {
			direction: rtl;
		}
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

<header>
	<button class="menu-toggle" class:menu-toggle-rtl={rtl} on:click={() => (menu_active = !menu_active)}>
		<Icon type={menu_active ? 'close' : 'menu'} />
	</button>
	<div class="title">{t('pom')}</div>
</header>
<div id="map-container">
	{#if showMap}
	<MapCompare mapLeft={map['left']} mapRight={map['right']}>
		{#each ['left', 'right'] as side}
		{#if side == 'left' || side == 'right' && toggles.split}
		<Map
			id="map-{side}"
			bind:map={map[side]}
			bind:center={center[side]}
			bind:zoom={zoom[side]}
			bind:pitch={pitch[side]}
			bind:bearing={bearing[side]}
			style={mapStyle}
			location={side == 'left' || !zoom.left ? location : {...center.left, zoom: zoom.left, pitch: pitch.left, bearing: bearing.left}}
			minzoom={5}
			maxzoom={17}
			attribution={false}
			controls={['compass', 'pitch', 'locate']}
		>
			<MapSource id="basemap" type="raster" url={side == 'left' ? layer.url : layers[0].url} maxzoom={17}>
				<MapLayer
					id="basemap"
					type="raster"
					paint={{"raster-saturation": toggles.overlay ? -0.85 : 0}}
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
					order={["building", "transport"].includes(l.group) ? "overlays-div" : null}
					visible={toggles.overlay && overlay_groups[l.group]}/>
				{/each}
			</MapSource>
			<MapSource id="places" type="geojson" data={places} promoteId="id">
				<MapLayer
					id="places"
					type="circle"
					paint={{
						'circle-radius': {'base': 1, 'stops': [[5, 1], [12, 5]]},
						'circle-color': ['get', 'color'],
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
					selected={place ? place.properties.id : null}
					on:select={doSelect}
					visible={toggles.places}
					order="places-div">
					<MapTooltip
						content={hovered
							? places.features.find((f) => f.properties.id == hovered).properties.name_en
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
					on:select={e => {sheets_selected = e.detail.event.features[0] ? e.detail.event.features.map(f => f.properties) : []; menu_active = true}}/>
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
				<MapLayer id="hillshade" type="hillshade" order="basemap-div" paint={{'hillshade-exaggeration': 0.1, 'hillshade-accent-color': 'rgba(0,0,0,0)', 'hillshade-shadow-color': 'rgba(0,0,0,0.7)', 'hillshade-highlight-color': 'rgba(255,255,255,0.3)'}}/>
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
<div id="toggles" class:toggles-rtl={rtl}>
	<label title="Toggle localities" class:checked={toggles.places}><input type="checkbox" bind:checked={toggles.places} /><Icon type="marker" /></label>
	<label title="Toggle overlays" class:checked={toggles.overlay}><input type="checkbox" bind:checked={toggles.overlay} /><Icon type="layers" /></label>
	<label title="Toggle split-screen" class:checked={toggles.split}><input type="checkbox" bind:checked={toggles.split} /><Icon type="split" rotation={90}/></label>
	<label title="Toggle 3D" class:checked={toggles.threed}><input type="checkbox" bind:checked={toggles.threed} on:change={() => map.left.flyTo(toggles.threed ? {pitch: 40} : {pitch: 0, bearing: 0})}/><Icon type="3d"/></label>
	<button title="Layer information" class:checked={toggles.info} on:click={() => unSelect("layer")}><Icon type="info" /></button>
</div>
{#if panel_status}
	<article id="content" class:content-rtl={rtl}>
		<button class="content-toggle" class:content-toggle-rtl={rtl} on:click={() => unSelect()}>
			<Icon type="close" />
		</button>
		{#if place && panel_status == 'place'}
			<h1>{rtl ? place.properties.name_ar : place.properties.name_en}</h1>
			<h2>
				{place.properties.group}
				{place.properties.type} in
				{place.properties.district_1945} district
			</h2>
			<InfoBlock label="Change since 1948">
				<div>
					<div class="bullet" style:background-color="{place.properties.color}"/>
					{place.properties.change_2016}
				</div>
			</InfoBlock>
			{#if place.properties.start || place.properties.end}
			<InfoBlock label="Key dates">
				{#if place.properties.start}
				<div>
					Founded<br/>
					<span class="text-lrg">{place.properties.start}</span>
				</div>
				{/if}
				{#if place.properties.end}
				<div>
					Depopulated<br/>
					<span class="text-lrg">{place.properties.end.toLocaleDateString("en-GB", { day: 'numeric', month: 'short', year: 'numeric' })}</span>
				</div>
				{/if}
			</InfoBlock>
			{/if}
			{#if place.properties.pop_1945 || place.properties.pop_2016}
			<InfoBlock label="Population">
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
			<InfoBlock label="Population by group" hr={false}>
				<BarChart data={makeDataset(place)}/>
			</InfoBlock>
			{/if}
			{#if place.properties.map_20k == 'yes' || place.properties.id_zo}
			<InfoBlock label="Related links">
				<div>
					{#if place.properties.map_20k == 'yes'}<a href="https://today.visualizingpalestine.org/{place.properties.slug}" target="_blank">Palestine Today</a><br/>{/if}
					{#if place.properties.id_zo}<a href="https://www.zochrot.org/villages/village_details/{place.properties.id_zo}/{lang}" target="_blank">Zochrot</a>{/if}
				</div>
			</InfoBlock>
			{/if}
		{:else if panel_status == 'layer'}
		<h1>{layer.name.slice(0, layer.name.lastIndexOf(','))}</h1>
			<h2>
				{layer.attribution.split(',')[0]}
			</h2>
			<InfoBlock label="Information">
				<div>
					Dates<br/>
					<span class="text-lrg">{@html getDates(layer)}</span>
				</div>
				{#if sheets.features.filter(s => s.properties.layer == layer.id).length > 0}
				<div>
					No. of map sheets<br/>
					<span class="text-lrg">{sheets.features.filter(s => s.properties.layer == layer.id).length}</span>
				</div>
				{/if}
			</InfoBlock>
			<InfoBlock label="Description">
				<div>{layer.description}</div>
			</InfoBlock>
		{/if}
	</article>
{/if}
{#if menu_active}
	<div id="mask" />
{/if}
<nav id="menu" style:left={rtl ? 'auto' : menu_active ? '0' : '-320px'} style:right={lang != 'ar' ? 'auto' : menu_active ? '0' : '-320px'}>
	<div id="search" class:search-rtl={rtl} style="--selectedItemPadding: {rtl ? '0 20px 0 0' : '0 0 0 20px'}">
		{#if places}
			<Select
				value={place ? place.properties : null}
				items={places.features.map((f) => f.properties)}
				optionIdentifier="id"
				labelIdentifier="name_{lang}"
				placeholder="Find a town or village"
				on:select={doSelect}
				on:clear={unSelect}
				showIndicator
			/>
		{/if}
	</div>
	<Accordion label="{t('baseMaps')}" {rtl}>
		{#each layers as l}
		<label><input type="radio" name="layers" bind:group={layer} value={l} /> {l.name}</label>
		{/each}
	</Accordion>
	<Accordion label="{t('overlays')}" {rtl}>
		<label><input type="checkbox" bind:checked={toggles.overlay} /> Show overlays</label>
		<hr/>
		{#each overlays as l}
		<label><input type="radio" disabled={!toggles.overlay} name="overlays" bind:group={overlay} value={l} /> {l.name}</label>
		{/each}
		<hr/>
		<label><input type="checkbox" disabled={!toggles.overlay} bind:checked={overlay_groups.building} /> Buildings</label>
		<label><input type="checkbox" disabled={!toggles.overlay} bind:checked={overlay_groups.transport} /> Roads/rail</label>
		<label><input type="checkbox" disabled={!toggles.overlay} bind:checked={overlay_groups.place} /> Place names</label>
	</Accordion>
	<Accordion label="{t('localities')}" {rtl}>
		<label><input type="checkbox" bind:checked={toggles.places} /> Show localities</label>
		<hr/>
		{#each statuses_arr as s}
		<label><input type="checkbox" disabled={!toggles.places} bind:group={statuses_active} value={s} /> <div class="bullet" style:background-color="{s.color}"/> {s.name}</label>
		{/each}
	</Accordion>
	<Accordion label="{t('download')}" {rtl} bind:open={toggles.download}>
		{#if sheets_selected[0]}
		{#if filterSheets(sheets_selected, layer.id)[0]}
		Sheets from this base map<br/>
		{#each filterSheets(sheets_selected, layer.id) as sheet}
		<Sheet {sheet}/>
		{/each}
		{/if}
		{#if filterSheets(sheets_selected, layer.id, false)[0]}
		Sheets from other base maps<br/>
		{#each filterSheets(sheets_selected, layer.id, false) as sheet}
		<Sheet {sheet}/>
		{/each}
		{/if}
		{:else}
		Click anywhere on the map to see sheets available to download covering that location.
		{/if}
		<button class="btn" on:click={() => {toggles.download = false; sheets_selected = [];}}>Close downloads</button>
	</Accordion>
	<Links>
		<label><input type="checkbox" bind:checked={toggles.split}/> Toggle split-screen</label>
		<label><input type="checkbox" bind:checked={toggles.threed} on:change={() => map.left.flyTo(toggles.threed ? {pitch: 40} : {pitch: 0, bearing: 0})}/> Toggle 3D</label>
	</Links>
	<Links>
		<a href="{base}/{lang}/about/"><Icon type="info"/> {t('about')}</a>
		<a href="{base}/{lang}/blog/"><Icon type="pen"/> Blog</a>
		<a href="{base}/{lang}/support/"><Icon type="heart"/> Support</a>
		<a href="{base}/{lang}/contact/"><Icon type="email"/> Contact</a>
	</Links>
	<Links>
		{#if rtl}
		<a href="{String($page.url).replace('ar', 'en')}"><Icon type="globe"/> English</a>
		{:else}
		<a href="{String($page.url).replace('en', 'ar')}"><Icon type="globe"/> عربي</a>
		{/if}
	</Links>
</nav>

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
	header {
		position: fixed;
		display: flex;
		flex-direction: row;
		left: 0;
		right: 0;
		top: 0;
		height: 50px;
		background-color: #333;
		z-index: 1;	
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
	#search {
		width: 100%;
		height: 50px;
		background-color: white;
		--height: 50px;
		--borderRadius: 0px;
		--border: 2px solid rgba(255,255,255,0);
		--indicatorFill: grey;
	}
	:global(#search input) {
		width: calc(100% - 30px);
	}
	.search-rtl {
		left: auto !important;
		right: 50px;
	}
	:global(.search-rtl .indicator) {
		right: auto !important;
		left: 10px;
	}
	#menu {
		position: absolute;
		top: 50px;
		width: 320px;
		min-height: calc(100% - 50px);
		background-color: #eee;
		transition-duration: 0.3s;
	}
	#mask {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.1);
		pointer-events: none;
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
	#menu label {
		display: block;
	}
	.menu-toggle {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 50px;
		background-color: #333;
		color: white;
		border: none;
		border-right: 1px solid #777;
		border-radius: 0;
		font-size: 1.5em;
	}
	.menu-toggle-rtl {
		left: auto !important;
		right: 100%;
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
	.title {
		box-sizing: border-box;
		width: 100%;
		display: flex;
		align-items: center;
		height: 50px;
		padding: 0 15px;
		font-weight: bold;
		font-size: 1.1em;
		color: white;
	}
  .bullet {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
	.text-lrg {
		font-size: 1.8em;
		font-weight: bold;
		line-height: 1;
	}
	#menu hr {
		border: 0;
		height: 0;
		border-bottom: 1px solid lightgrey;
	}
	.btn {
		display: block;
		border: 1.5px solid black;
		background-color: white;
		color: black;
		border-radius: 2px;
		margin-top: 8px;
	}
	.btn:hover {
		background-color: black;
		color: white;
	}
</style>
