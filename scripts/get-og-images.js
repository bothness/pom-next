import fs from "fs";
import { download } from "./utils.js";

const slugs = (fs.readFileSync("./scripts/og-images.txt", {encoding:'utf8', flag:'r'})).split("\n");

slugs.forEach(slug => {
  const path = `./static/img/og/${slug}.jpg`;
  if (!fs.existsSync(path)) {
    download(`https://today.visualizingpalestine.org/img/${slug}.jpg`, path);
  }
});