<script>
	import { onMount } from "svelte";
	import { base } from '$app/paths';
	import { goto } from "$app/navigation";

	let lang;

	onMount(() => {
		lang = navigator.language.slice(0, 2);
		if (lang == "ar") {
			goto(`${base}/${lang}/`);
		} else {
			goto(`${base}/en/`);
		}
	});
</script>

<a href="{base}/{lang && lang == 'ar' ? 'ar' : 'en'}/maps/">Redirecting...</a>
<slot/>