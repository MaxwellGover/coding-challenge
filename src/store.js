import {createStore} from 'redux';
import rootReducer from './reducers/index';

export const appState = {
	links: []
};

const store = createStore(rootReducer, appState);

export default store;