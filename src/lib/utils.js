import { csvParse, autoType } from "d3-dsv";

export async function getPlaces(url, statuses, fetch = window.fetch) {
	let res = await fetch(url);
	let str = await res.text();
	let locs = csvParse(str, autoType);
	locs.sort((a, b) => a["name_en"].localeCompare(b["name_en"]));
	
	let geojson = {
		type: "FeatureCollection",
		features: [],
	};
		
	for (const loc of locs.filter(d => d["change_2016"] != "Built & abandoned")) {
		let feature = {
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [loc["lng"], loc["lat"]],
			},
			properties: {
				type: loc["type_2016"] ? loc["type_2016"] : loc["type_1945"],
				group: loc["grp_2016"] ? loc["grp_2016"] : loc["grp_1945"],
				color: statuses[loc["change_2016"]].color,
				...loc
			},
		};
		feature.properties["name_ar"] = loc["name_ar"] ? loc["name_ar"] : loc["name_en"];
		geojson.features.push(feature);
	}
	return geojson;
}

export async function getSheets(url, layers, fetch = window.fetch) {
	let res = await fetch(url);
	let sheets = await res.json();
	sheets.sort((a, b) => a.layer - b.layer);

	let geojson = {
		type: "FeatureCollection",
		features: [],
	};

	for (const sheet of sheets) {
		let props = Object.fromEntries(Object.entries(sheet).filter(([key]) => key != "boundaries"));
		let layer = layers.find(l => l.id == sheet.layer);
		props.year = props.year ? props.year.split("-")[0] : layer.start_year.split("-")[0];

		geojson.features.push({
			properties: {...props, scale: layer.scale, author: layer.attribution.split(",")[0]},
			geometry: sheet.boundaries
		});
	}
	return geojson;
}

export function i18n(key, texts, lang = "en", fallback = "en") {
	if (texts[lang] && texts[lang][key]) {
		return texts[lang][key];
	} else if (texts[fallback] && texts[fallback][key]) {
		return texts[fallback][key];
	} else {
		return key;
	}
}

export function makeDataset(place) {
	let props = place.properties;
	return {
		p1945: {
			pop: props.pop_1945,
			pal: props.pal_1945 && props.pop_1945 ? 100 * props.pal_1945 / props.pop_1945 : null,
			jsh: props.jsh_1945 && props.pop_1945 ? 100 * props.jsh_1945 / props.pop_1945 : null,
			oth: null
		},
		p2016: {
			pop: props.pop_2016,
			pal: props.pal_2016 && props.pop_2016 ? 100 * props.pal_2016 / props.pop_2016 : null,
			jsh: props.jsh_2016 && props.pop_2016 ? 100 * props.jsh_2016 / props.pop_2016 : null,
			oth: props.oth_2016 && props.pop_2016 ? 100 * props.oth_2016 / props.pop_2016 : null
		}
	}
}

export function makeStyle(layer, desaturate = false) {
	return {
		"version": 8,
		"glyphs": "https://cdn.jsdelivr.net/gh/bothness/basemaps/fonts/{fontstack}/{range}.pbf",
		"sources": {
			"source": {
				"type": "raster",
				"tiles": [layer.url],
				"tileSize": 256,
				"attribution": layer.attribution,
				"minzoom": 0,
				"maxzoom": 17
			}
		},
		"layers": [
			{
				"id": "base",
				"type": "raster",
				"source": "source",
				"paint": {
					"raster-saturation": desaturate ? -0.85 : 0
				}
			},
			{
				"id": "overlays-div",
				"type": "background",
				"paint": {"background-opacity": 0}
			},
			{
				"id": "places-div",
				"type": "background",
				"paint": {"background-opacity": 0}
			}
		]
	}
}

export function sleep (ms = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}