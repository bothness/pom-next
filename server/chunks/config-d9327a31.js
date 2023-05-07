import { b as base } from './paths-05fee424.js';

const base_url = `https://palopenmaps.org`;
const locs_url = `${base}/data/places.json`;
const redirect_url = `${base}/data/redirects.csv`;
const layers_url = `${base_url}/api/layers/`;
const sheets_url = `${base_url}/api/sheets/`;
const statuses = {
  Remaining: {
    name: "Remaining",
    color: "#7ac943",
    selected: true
  },
  Depopulated: {
    name: "Depopulated",
    color: "#fcee21",
    selected: true
  },
  Appropriated: {
    name: "Depopulated & appropriated",
    color: "#f7931e",
    selected: true
  },
  "Built over": {
    name: "Depopulated & built over",
    color: "#ff0000",
    selected: true
  },
  Abandoned: {
    name: "Abandoned",
    color: "#0099ff",
    selected: false
  },
  "Newly built": {
    name: "New locality",
    color: "#777777",
    selected: false
  }
};
const pages = [
  {
    key: "about",
    label: "About",
    icon: "info",
    id: { en: 3, ar: 7 }
  },
  // {
  // 	key: "vision",
  // 	label: "Project vision",
  // 	icon: "stars",
  // 	id: {en: 5, ar: 8}
  // },
  {
    key: "get-involved",
    label: "Get involved",
    icon: "hand",
    id: { en: 6, ar: 9 }
  }
];

export { locs_url as a, base_url as b, statuses as c, layers_url as l, pages as p, redirect_url as r, sheets_url as s };
//# sourceMappingURL=config-d9327a31.js.map
