// Add link
export function addLink() {
	return {
		type: 'ADD_LINK'
	}
}

// Edit link
export function editLink(index) {
	return {
		type: 'EDIT_LINK',
		index
	}
}

// Remove link
export function removeLink(index) {
	return {
		type: 'REMOVE_LINK',
		index
	}
}