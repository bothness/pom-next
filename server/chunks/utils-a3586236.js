import { c as csvParse, a as autoType } from './autoType-090e08b5.js';

async function getPlaces(url, statuses, fetch = window.fetch) {
  let res = await fetch(url);
  let str = await res.text();
  let locs = csvParse(str, autoType);
  locs.sort((a, b) => a["name_en"].localeCompare(b["name_en"]));
  let geojson = {
    type: "FeatureCollection",
    features: []
  };
  for (const loc of locs.filter((d) => d["change_2016"] != "Built & abandoned" && d["grp_1945"] != "Syrian" && d["lng"])) {
    let feature = {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [loc["lng"], loc["lat"]]
      },
      properties: {
        type: loc["type_2016"] ? loc["type_2016"] : loc["type_1945"],
        group: loc["grp_2016"] ? loc["grp_2016"] : loc["grp_1945"],
        color: statuses[loc["change_2016"]].color,
        ...loc
      }
    };
    feature.properties["name_ar"] = loc["name_ar"] ? loc["name_ar"] : loc["name_en"];
    geojson.features.push(feature);
  }
  return geojson;
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

export { getSheets as a, getPlaces as g, i18n as i, makeDataset as m };
//# sourceMappingURL=utils-a3586236.js.map
