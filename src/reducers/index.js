function addLink(state = [], action) {
	switch(action.type) {
		case 'ADD_LINK': 
			const linkName = action.linkName;
			console.log('Adding link');
			console.log(linkName);
		default: 
			return state;
	}
};

export default addLink;