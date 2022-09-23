const prerender = true;
  
export async function load({ params, parent }) {
	const stuff = await parent();
	let slug = params.slug.replace("/","");

	let places = stuff.places; // places is loaded once in __layout.svelte and passed to this route
	let place = places.features.find(f => f.properties.slug == slug);

	let layers = stuff.layers; // layers loaded in same way as places
	let sheets = stuff.sheets; // sheets ditto

	return { layers, sheets, places, place };
}
