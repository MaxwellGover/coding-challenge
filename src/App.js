import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="App-header">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
