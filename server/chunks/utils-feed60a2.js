import { b as base } from './paths-05fee424.js';

const overlays = [
  {
    key: "pal2020",
    name: "Vector overlay, 2020s",
    attribution: "OpenMapTiles / OpenStreetMap Contributors",
    description: "Present day geographic features derived from OpenStreetMap, Wikidata and Natural Earth. Vector tiles generated using OpenMapTiles tools.",
    url: "https://cdn.jsdelivr.net/gh/bothness/pom-tiles/pal2020s/{z}/{x}/{y}.pbf"
  },
  {
    key: "pal1940",
    name: "Vector overlay, 1940s",
    attribution: "Palestine Open Maps community",
    description: 'Crowd-sourced digitisation of "Palestine 1:20,000" Survey of Palestine map series from the 1940s. Vector tiles generated using OpenMapTiles tools.',
    url: "https://cdn.jsdelivr.net/gh/bothness/pom-tiles/pal1940s/{z}/{x}/{y}.pbf",
    edit: "http://data.palopenmaps.org/edit#background=custom:http://palopenmaps.org/tiles/pal20k-1940s/{z}/{x}/{y}@2x.jpg&disable_features=boundaries&map=",
    is_default: true
  }
];
const layer_aerial = {
  "id": 16,
  "name": "Aerial imagery, 1940s",
  "description": "A layer compiled from black and white aerial photographs captured by the British military in the 1940s. It is color-corrected and merged together into a single raster tileset.",
  "boundaries": null,
  "scale": 1,
  "start_year": "1944-01-01",
  "end_year": "1948-05-15",
  "url": "https://cdn.jsdelivr.net/gh/bothness/pom-tiles/aerial1940s/{z}/{x}/{y}.png",
  "attribution": "Royal Air Force, 1940s",
  "is_active": false,
  "is_default": false,
  "is_overlay": false,
  "order": -1,
  "author": 10,
  "sources": [36],
  "further_readings": []
};
async function getPlaces(url, fetch = window.fetch) {
  let res = await fetch(url);
  return await res.json();
}
async function getPlace(slug, fetch = window.fetch) {
  let res = await fetch(`${base}/data/places/${slug}.json`);
  return res ? await res.json() : null;
}
async function getLayers(url, fetch = window.fetch) {
  let layers = await (await fetch(url)).json();
  layers = layers.filter((l) => l.is_active && !l.is_overlay);
  if (!layers.map((l) => l.id).includes(16))
    layers = [layers[0], layer_aerial, ...layers.slice(1)];
  return layers;
}
async function getSheets(url, layers, fetch = window.fetch) {
  let res = await fetch(url);
  let sheets = await res.json();
  sheets.sort((a, b) => a.layer - b.layer);
  let geojson = {
    type: "FeatureCollection",
    features: []
  };
  for (const sheet of sheets) {
    let props = Object.fromEntries(Object.entries(sheet).filter(([key]) => key != "boundaries"));
    let layer = layers.find((l) => l.id == sheet.layer);
    props.year = props.year ? props.year.split("-")[0] : layer.start_year.split("-")[0];
    geojson.features.push({
      properties: { ...props, scale: layer.scale, author: layer.attribution.split(",")[0] },
      geometry: sheet.boundaries
    });
  }
  return geojson;
}
function i18n(key, texts, lang) {
  if (lang != "en" && texts[lang] && texts[lang][key]) {
    return texts[lang][key];
  } else {
    return key;
  }
}
function makeDataset(place) {
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
  };
}

export { getLayers as a, getSheets as b, getPlace as c, getPlaces as g, i18n as i, makeDataset as m, overlays as o };
//# sourceMappingURL=utils-feed60a2.js.map
