// export const prerender = true;
  
export async function load({ parent }) {
	const stuff = await parent();
	let places = stuff.places; // places is loaded once in __layout.svelte and passed to this route

	return { places };
}
