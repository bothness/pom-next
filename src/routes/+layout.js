// export const prerender = true;

import { dev } from '$app/environment';
import { locs_url, layers_url, sheets_url } from "$lib/config";
import { getPlaces, getLayers, getSheets } from "$lib/utils";

export async function load({ fetch }) {
	const config = dev ? {method: "get", headers: {origin: "http://localhost:5173"}} : {method: "get"};
	
	let places = await getPlaces(locs_url, fetch);
// 	let layers = await getLayers(new Request(layers_url, config), fetch);
// 	let sheets = await getSheets(new Request(sheets_url, config), layers, fetch);
	let layers = await getLayers(layers_url, fetch);
	let sheets = await getSheets(sheets_url, layers, fetch);

	return { places, layers, sheets };
}
