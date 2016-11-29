import React, { Component } from 'react';
import './App.css';
import store from './store';

class App extends Component {
  render() {
    console.log(store.getState())
    return (
      <div className="app container">
        <div className="app-header">
          {React.cloneElement(this.props.children, this.props)}
        </div>
      </div>
    );
  }
}

export default App;
