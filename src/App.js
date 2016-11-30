/* eslint-disable */
import React, { Component } from 'react';
import './App.css';
import store from './store';

class App extends Component {
  render() {
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