<script>
	import Toggle from '$lib/Toggle.svelte';
	import Accordion from '$lib/Accordion.svelte';
	import BetterAccordion from '$lib/BetterAccordion.svelte';
	import SearchFilter from '$lib/SearchFilter.svelte';

	let isToggled = false;

	let items = [
		"red",
		"blue",
		"orange",
		"yellow",
		"green",
		"brown",
		"black",
		"white"
	]
</script>

<h1>Welcome to SvelteKit</h1>

<SearchFilter {items} />

<!-- <BetterAccordion isOpen={true} buttonText="Question">
	<div>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, perspiciatis blanditiis ipsum
			voluptatem excepturi modi quo natus labore error eveniet?
		</p>
	</div>
</BetterAccordion>
 -->
<!-- <Accordion isOpen={true} buttonText="Do I need a thing?">
	<div>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, animi?</p>
	</div>
</Accordion> -->

<!-- <Toggle bind:isToggled label="beta" />
<Toggle bind:isToggled label="beta" style="--toggleBackgroundColor: red;" />

{#if isToggled}
	<h1>Hi, I'm toggled</h1>
{/if}
 -->

