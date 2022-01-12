/**
 * practice with Jay
 */

const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

// Drag Functions
list_items.forEach((list_item) => {
	list_item.addEventListener('dragstart', () => {
		// list_item.classList.add('dragging');
	});

	list_item.addEventListener('dragend', () => {
		// list_item.classList.remove('dragging');
	});
});

lists.forEach((list) => {
	list.addEventListener('dragover', (e) => {
		// Drop is allowed cursor when inside lists and vice versa.
		e.preventDefault();
		const list_item = document.querySelector('.dragging');
		// Adds a node to the end of the list of children of a specified parent node.
		list.appendChild(list_item);
	});
});

document.addEventListener('mousemove', (event) => {
	let targets = document.getElementsByClassName('dragging');
	if (!targets.length) return;
	targets[0].style.top = `${event.clientY}px`; // event.clientY + "px"
	targets[0].style.left = `${event.clientX}px`;
});

document.addEventListener('mousedown', (event) => {
	let item = event.target;
	if (item.localName != 'div') return;
	item.classList.add('dragging');
});

document.addEventListener('mouseup', (event) => {
	let targets = document.getElementsByClassName('dragging');
	// Go through multiple items on the list and removes one that has dragging class.
	for (let item of targets) {
		item.classList.remove('dragging');
	}
});

// Determine mouse position when dragging.
// @return: which element position is directed after.
// @param: elements in lists and mouse position.
function getDragAfterElement(lists, y) {
	// Selects out all elements except current dragging one.
	const draggableElements = [
		...lists.querySelectorAll('.draggable:not(.dragging'),
	];

	draggableElements.reduce();
}
