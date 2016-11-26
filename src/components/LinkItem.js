import React, { Component } from 'react';

class LinkItem extends Component {
  constructor() {
    super();
    this.state = {
      clicks: 0
    };
  }
  render() {
    return (
      <div className="LinkItem">
        I'm a link item
    	</div>
    );
  }
}

export default LinkItem;