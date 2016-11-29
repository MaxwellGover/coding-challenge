// Add link
export function addLink(text) {
	return {
		type: 'ADD_LINK',
		text
	}
}

// Edit link
export function updateLink(index, newText) {
	return {
		type: 'UPDATE_LINK',
		index,
		newText
	}
}

// Remove link
export function deleteLink(index) {
	return {
		type: 'DELETE_LINK',
		index
	}
}