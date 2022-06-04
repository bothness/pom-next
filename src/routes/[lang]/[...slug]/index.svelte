<script context="module">
	const prerender = true;

	import { base } from "$app/paths";
	import { overlays, overlayers } from "$lib/layers";
  
	export async function load({ params, stuff }) {
		let lang = params.lang;
		let slug = params.slug;

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
	};
	let overlay_groups = {
		building: false,
		transport: true,
		place: true
	};
	$: filter = statuses_active ? ['any', ['in', 'change_2016', ...statuses_active.map(s => s.key)]] : [];

	function doSelect(e) {
		let place = places.features.find((f) => f.properties.id == e.detail.id);
		goto(`${base}/${lang}/${place.properties.slug}`);
	}

	function unSelect(layer = false) {
		panel_status = layer ? "layer" : null;
		if (place) goto(`${base}/${lang}`);
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

	onMount(() => {
		showMap = true
		maplibre.setRTLTextPlugin('https://www.unpkg.com/@mapbox/mapbox-gl-rtl-text@0.2.3/mapbox-gl-rtl-text.js');
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
		}, 
		"he": {
			"hello": "shalom"
		}
	};
	$: text = (key) => i18n(key, texts, lang);
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
				top: 40px !important;
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
				top: 40px !important;
			}
		}
	</style>
	{/if}
</svelte:head>

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
			style={mapStyle}
			location={side == 'left' ? location : {...center['left'], zoom: zoom['left']}}
			minzoom={5}
			maxzoom={17}
			attribution={false}
			controls
			locate
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
						'circle-stroke-color': 'rgba(0,0,0,0.2)',
						'circle-stroke-width': {'base': 1, 'stops': [[5, 1], [12, 2]]}
						}}
					{filter}
					hover
					let:hovered
					select
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
						'fill-color': "rgba(255,255,255,0)"
						}}
					select
					on:select={e => sheets_selected = e.detail.event.features[0] ? e.detail.event.features.map(f => f.properties) : []}/>
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
	<button title="Layer information" class:checked={toggles.info} on:click={() => unSelect(true)}><Icon type="info" /></button>
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
<div id="search" class:search-rtl={rtl} style="--selectedItemPadding: {rtl ? '0 20px 0 0' : '0 0 0 20px'}">
	{#if places}
		<Select
			value={place ? place.properties : null}
			items={places.features.map((f) => f.properties)}
			optionIdentifier="id"
			labelIdentifier="name_{lang}"
			on:select={doSelect}
			on:clear={unSelect}
			showIndicator
		/>
	{/if}
</div>
{#if menu_active}
	<div id="mask" />
{/if}
<nav id="menu" style:left={rtl ? 'auto' : menu_active ? '0' : '-320px'} style:right={lang != 'ar' ? 'auto' : menu_active ? '0' : '-320px'}>
	<button class="menu-toggle" class:menu-toggle-rtl={rtl} on:click={() => (menu_active = !menu_active)}>
		<Icon type={menu_active ? 'close' : 'menu'} />
	</button>
	<div class="title">{text('pom')}</div>
	<Accordion label="{text('baseMaps')}" {rtl}>
		{#each layers as l}
		<label><input type="radio" name="layers" bind:group={layer} value={l} /> {l.name}</label>
		{/each}
	</Accordion>
	<Accordion label="{text('overlays')}" {rtl}>
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
	<Accordion label="{text('localities')}" {rtl}>
		<label><input type="checkbox" bind:checked={toggles.places} /> Show localities</label>
		<hr/>
		{#each statuses_arr as s}
		<label><input type="checkbox" disabled={!toggles.places} bind:group={statuses_active} value={s} /><div class="bullet" style:background-color="{s.color}"/> {s.name}</label>
		{/each}
	</Accordion>
	<Accordion label="{text('download')}" {rtl} bind:open={toggles.download}>
		{#if sheets_selected[0]}
		{#if filterSheets(sheets_selected, layer.id)}
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
		<a href="{base}/{lang}/about"><Icon type="info"/> {text('about')}</a>
		<a href="{base}/{lang}/blog"><Icon type="pen"/> Blog</a>
		<a href="{base}/{lang}/support"><Icon type="heart"/> Support</a>
		<a href="{base}/{lang}/contact"><Icon type="email"/> Contact</a>
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
	#map-container {
		position: fixed;
		top: 0;
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
		padding: 40px 15px 10px 15px;
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
		position: absolute;
		top: 0;
		left: 40px;
		width: 368px;
		max-width: calc(100vw - 40px);
		height: 40px;
		background-color: white;
		--height: 40px;
		--borderRadius: 0px;
		--border: 1px solid lightgrey;
		--indicatorFill: grey;
	}
	:global(#search input) {
		width: calc(100% - 30px);
	}
	.search-rtl {
		left: auto !important;
		right: 40px;
	}
	:global(.search-rtl .indicator) {
		right: auto !important;
		left: 10px;
	}
	#menu {
		position: absolute;
		top: 0;
		width: 320px;
		min-height: 100%;
		background-color: white;
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
		appearance: none;
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
		position: absolute;
		top: 0;
		left: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		background-color: white;
		border: none;
		border-radius: 0;
		font-size: 1.5em;
	}
	.menu-toggle-rtl {
		left: auto !important;
		right: 100%;
	}
	.content-toggle {
		position: absolute;
		top: 40px !important;
		left: calc(100% - 40px);
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		background: none;
		border: none;
		font-size: 1.5em;
	}
	.content-toggle-rtl {
		left: auto !important;
		right: calc(100% - 40px);
	}
	.title {
		box-sizing: border-box;
		width: 100%;
		display: flex;
		align-items: center;
		height: 40px;
		padding: 0 15px;
		font-weight: bold;
		font-size: 1.1em;
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
