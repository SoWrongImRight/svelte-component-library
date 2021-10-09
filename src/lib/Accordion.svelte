<script>
	import { get_all_dirty_from_scope } from 'svelte/internal';

	import { slide } from 'svelte/transition';
	export let buttonText = '';
	export let isOpen = true;
</script>

<div>
	<button on:click={() => (isOpen = !isOpen)}>
		{buttonText}
	</button>
	{#if isOpen}
		<div transition:slide>
			<slot />
		</div>
	{/if}
</div>
