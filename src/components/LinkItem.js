import React, { Component } from 'react';
import {Link} from 'react-router';

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
         <tr>
          <td><Link to=''>Link Name</Link></td>
          <td>{this.state.clicks}</td>
          <td>Edit</td>
          <td>Delete</td>
        </tr>
    	</div>
    );
  }
}

export default LinkItem;