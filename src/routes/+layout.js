// export const prerender = true;

import { dev } from '$app/environment';
import { locs_url, layers_url, sheets_url } from "$lib/config";
import { getPlaces, getLayers, getSheets } from "$lib/utils";

export async function load({ fetch }) {
	let places = await getPlaces(locs_url, fetch);
	let layers = await getLayers(layers_url, fetch);
	let sheets = await getSheets(sheets_url, layers, fetch);

	return { places, layers, sheets };
}
