export function slide(node, isOpen) {
	let initialHeight = node.offsetHeight;
	node.style.heigh = isOpen ? 'auto' : 0;
	node.style.overflow = 'hidden';

	return {
		update: () => {
			node.style.heigh = isOpen ? 'auto' : 0;
		}
	};
}
