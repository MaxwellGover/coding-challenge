import React, { Component } from 'react';
import LinkQuery from '../components/LinkQuery';

class LandingPage extends Component {
  render() {
    var styles = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap',
        flexDirection: 'column',
        marginTop: 60
      },
    }
    return (
      <div className="container" style={styles.container}>
      	<h3>Welcome to the Landing Page</h3>
        <LinkQuery {...this.props}/>
      </div>
    );
  }
}

export default LandingPage;