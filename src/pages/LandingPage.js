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
        marginTop: 60,
        marginBottom: 20
      },
    };
    return (
      <div className="container" style={styles.container}>
      	<LinkQuery {...this.props}/>
      	<h1>Welcome to the World Wide Web!</h1>
      </div>
    );
  }
}

export default LandingPage;