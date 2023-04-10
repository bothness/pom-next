import fs from "fs";
import { csvParse, autoType } from "d3-dsv";
import { download } from "./utils.js";
import { locs_path } from "./config.js";

const poha_path = "./scripts/data/poha-places.csv";
const poha_url = "https://libraries.aub.edu.lb/poha-viewer/map/assets/json/l";

const locs = csvParse(fs.readFileSync(locs_path, {encoding:'utf8', flag:'r'}), autoType);
const poha = csvParse(fs.readFileSync(poha_path, {encoding:'utf8', flag:'r'}), autoType).filter(p => p.pom_id);

poha.forEach(p => {
  const loc = locs.find(l => l.id === p.pom_id);
  if (loc) {
    const path = `./raw-data/poha/${loc.slug}.json`;
    if (!fs.existsSync(path)) download(`${poha_url}${p.landmark_id}.json`, path, true);
  }
});