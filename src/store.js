import {createStore} from 'redux';
import rootReducer from './reducers/index';

const appState = {
	links: []
};

const store = createStore(rootReducer, appState);

export default store;