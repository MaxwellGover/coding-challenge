// Add link
export function addLink(text) {
	return {
		type: 'ADD_LINK',
		text
	}
}

// Edit link
export function editLink(index, text) {
	return {
		type: 'EDIT_LINK',
		index,
		text
	}
}

// Remove link
export function deleteLink(index) {
	return {
		type: 'DELETE_LINK',
		index
	}
}