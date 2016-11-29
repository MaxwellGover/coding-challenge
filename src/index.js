import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,  IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import Main from './Main';
import LinkPage from './pages/LinkPage';
import LandingPage from './pages/LandingPage';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
	  <Router history={browserHistory}>
	    <Route path="/" component={Main}>
	      <IndexRoute component={LinkPage}/>
	      <Route path="/landing/:name" component={LandingPage}></Route>
	    </Route>
	  </Router>
  </Provider>,
  document.getElementById('root')
);
