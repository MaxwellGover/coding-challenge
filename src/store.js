import {createStore} from 'redux';
import rootReducer from './reducers/index';

const appState = {
	linkText: '',
	links: []
};

const store = createStore(rootReducer, appState);

export default store;