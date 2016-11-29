import React, { Component } from 'react';
import LinkQuery from '../components/LinkQuery';

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
      	<h3>Welcome to the Landing Page</h3>
        <LinkQuery {...this.props}/>
      </div>
    );
  }
}

export default LandingPage;