<script>
	import Toggle from '$lib/Toggle.svelte';
	import Accordion from '$lib/Accordion.svelte';

	let isToggled = false;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Accordion isOpen={true} buttonText="Do I need a thing?">
	<div>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, animi?</p>
	</div>
</Accordion>

<Toggle bind:isToggled label="beta" />
<Toggle bind:isToggled label="beta" style="--toggleBackgroundColor: red;" />

{#if isToggled}
	<h1>Hi, I'm toggled</h1>
{/if}
