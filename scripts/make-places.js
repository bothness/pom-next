import fs from "fs";
import { csvParse, csvFormat, autoType } from "d3-dsv";
import { locs_path, places_path, redirect_path } from "./config.js";

const locs = csvParse(fs.readFileSync(locs_path, {encoding:'utf8', flag:'r'}), autoType);

// Make geojson for all places
const geojson = {type: "FeatureCollection", features: []};
const redirect = [];

for (const loc of locs.filter(d => !["Sinai", "Quneitra"].includes(d["district_1945"]) && d["lng"])) {
  const geometry = {type: "Point", coordinates: [loc["lng"], loc["lat"]]};
  const props = {
    type: loc["type_2016"] || loc["type_1945"],
    group: loc["grp_2016"] || loc["grp_1945"],
    status: loc["change_2016"],
    ...loc
  };
  props["name_ar"] = props["name_ar"] ? props["name_ar"] : props["name_en"];
  const properties = {};
  for (const key of ["name_en", "name_ar", "slug", "type", "group", "status", "start", "end"]) {
    if (key === "end") {
      let yr = props.status === "Appropriated" ? null : typeof props[key] === "object" ? props[key]?.getFullYear() || null : null;
      if (!yr && ["Depopulated", "Built over", "Abandoned"].includes(props.status)) yr = 1948;
      if (yr) properties[key] = yr;
    }
    else if (key === "group") properties[key] = props["grp_1945"] || props["grp_2016"];
    else if (props[key]) properties[key] = props[key];
  }
  geojson.features.push({type: "Feature", geometry, properties});
  redirect.push({id_old: props.id_old, id_new: props.id, slug: props.slug})
  
  const path = `./static/data/places/${loc.slug}.json`;
  const poha_path = `./raw-data/poha/${loc.slug}.json`;
  if (fs.existsSync(poha_path)) props.poha =  JSON.parse(fs.readFileSync(poha_path, {encoding:'utf8', flag:'r'}));
  fs.writeFileSync(path, JSON.stringify({type: "Feature", geometry, properties: props}));
  console.log(`Wrote ${path}`);
}
fs.writeFileSync(places_path, JSON.stringify(geojson));
console.log(`Wrote ${places_path}`);

fs.writeFileSync(redirect_path, csvFormat(redirect.filter(r => r.id_old)));
console.log(`Wrote ${redirect_path}`);