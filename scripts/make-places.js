import fs from "fs";
import { csvParse, autoType } from "d3-dsv";
import { locs_path, places_path } from "./config.js";

const locs = csvParse(fs.readFileSync(locs_path, {encoding:'utf8', flag:'r'}), autoType);

// Make geojson for all places
const geojson = {type: "FeatureCollection", features: []};

for (const loc of locs.filter(d => d["change_2016"] != "Built & abandoned" && d["grp_1945"] != "Syrian" && d["lng"])) {
  const geometry = {type: "Point", coordinates: [loc["lng"], loc["lat"]]};
  const props = {
    type: loc["type_2016"] ? loc["type_2016"] : loc["type_1945"],
    group: loc["grp_2016"] ? loc["grp_2016"] : loc["grp_1945"],
    status: loc["change_2016"],
    ...loc
  };
  const properties = {};
  ["name_en", "name_ar", "slug", "type", "group", "status"].forEach(key => properties[key] = props[key]);
  geojson.features.push({type: "Feature", geometry, properties});
  
  const path= `./static/data/places/${loc.slug}.json`;
  const poha_path = `./raw-data/poha/${loc.slug}.json`;
  if (fs.existsSync(poha_path)) props.poha =  JSON.parse(fs.readFileSync(poha_path, {encoding:'utf8', flag:'r'}));
  fs.writeFileSync(path, JSON.stringify({type: "Feature", geometry, properties: props}));
  console.log(`Wrote ${path}`);
}
fs.writeFileSync(places_path, JSON.stringify(geojson));
console.log(`Wrote ${places_path}`);