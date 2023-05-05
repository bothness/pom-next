import { base } from "$app/paths";

export const base_url = `https://palopenmaps.org`;
export const locs_url = `${base}/data/places.json`;
export const redirect_url = `${base}/data/redirects.csv`;
export const layers_url = `${base_url}/api/layers/`;
export const sheets_url = `${base_url}/api/sheets/`;

export const maxBounds = [[33.5, 29.0], [36.4, 33.9]];

export const statuses = {
	Remaining: {
		name: "Remaining",
		color: "#7ac943",
		selected: true,
	},
	Depopulated: {
		name: "Depopulated",
		color: "#fcee21",
		selected: true,
	},
	Appropriated: {
		name: "Depopulated & appropriated",
		color: "#f7931e",
		selected: true,
	},
	"Built over": {
		name: "Depopulated & built over",
		color: "#ff0000",
		selected: true,
	},
	Abandoned: {
		name: "Abandoned",
		color: "#0099ff",
		selected: false,
	},
	"Newly built": {
		name: "New locality",
		color: "#777777",
		selected: false,
	}
};

export const pages = [
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