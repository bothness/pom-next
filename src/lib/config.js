export const locs_url =
"https://docs.google.com/spreadsheets/d/1LejOouylx6u_TKF_1BxvV_B7uI34M4zIWyoc8LozATo/gviz/tq?tqx=out%3Acsv&sheet=database";
export const layers_url = "https://palopenmaps.org/api/layers/?format=json";
export const sheets_url = "https://palopenmaps.org/api/sheets/?format=json";

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