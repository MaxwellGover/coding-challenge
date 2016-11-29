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
		case 'EDIT_LINK':
			var index = action.index;
			var text = action.text;
			console.log(action.text);
			console.log(action.index);
		default: 
			return state;
	}
};

export default linkList;