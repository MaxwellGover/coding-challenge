import React, { Component } from 'react';
import './App.css';
import store from './store';

class App extends Component {
  render() {
    console.log(store.getState())
    return (
      <div className="App container">
        <div className="App-header">
          {React.cloneElement(this.props.children, this.props)}
        </div>
      </div>
    );
  }
}

export default App;
