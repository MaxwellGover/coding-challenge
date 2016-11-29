export function linkList(state = [], action) {
	switch(action.type) {
		case 'ADD_LINK': 
			var text = action.text;
			console.log('Adding link');
			console.log(text);
			return {
				...state,
				links: [text, ...state.links]
			};
		case 'DELETE_LINK':
			var index = action.index;
			console.log('Deleting link');
			return {
				...state,
				links: [
    				...state.links.slice(0, index),
   					...state.links.slice(index + 1)
				],
			};
		case 'UPDATE_LINK':
			var index = action.index;
			var newText = action.newText;
			console.log(action.newText);
			console.log(action.index);
			return {
				...state,
				// Now what?
			}
		default: 
			return state;
	}
};

export default linkList;