/*eslint-disable*/
export function linkList(state = [], action) {
	switch(action.type) {
		case 'ADD_LINK': 
			var text = action.text;
			return {
				...state,
				links: [text, ...state.links]
			};
		case 'DELETE_LINK':
			var index = action.index;
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
			return {
				...state,
				links: [ 
					...state.links.slice(0, index),
        			newText,
        			...state.links.slice(index + 1)
				],
			}
		default: 
			return state;
	}
};

export default linkList;