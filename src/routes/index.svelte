<script>
	import Toggle from '$lib/Toggle.svelte';

	let isToggled = false;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Toggle bind:isToggled label="beta" />
<Toggle bind:isToggled label="beta" style="--toggleBackgroundColor: red;" />

{#if isToggled}
	<h1>Hi, I'm toggled</h1>
{/if}
