<script>
	export let buttonText = '';
	export let isOpen = true;
	import { slide } from './Slide';
</script>

<div>
	<button on:click={() => (isOpen = !isOpen)}>{buttonText}</button>

	<div use:slide={isOpen}>
		<slot />
	</div>
</div>
