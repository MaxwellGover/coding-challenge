import React, { Component } from 'react';
import LinkQuery from '../components/LinkQuery';
import {Link} from 'react-router';

class LandingPage extends Component {
  render() {
    var styles = {
      landingPage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap',
        flexDirection: 'column',
        marginTop: 60,
        marginBottom: 20,
      },
      header: {
        color: '#F7F7F9',
        fontSize: 40,
        textAlign: 'center',
        fontFamily: 'Russo One, sans-serif'
      },
      link: {
        textAlign: 'center'
      },
      backButton: {
        marginTop: 40,
        borderRadius: 2,
        backgroundColor: '#3C97D3',
        borderColor: '#3C97D3'
      },
      background: {
        width: '100%', 
        height: '100%', 
        position: 'fixed', 
        left: 0, 
        top: 0, 
        zIndex: -1
      },
      stretch: {
        width: '100%',
        height: '100%'
      }
    };
    return (
      <div className="landingPage" style={styles.landingPage}>
        <div className="background" style={styles.background}>
          <img src="http://i.imgur.com/zf1ujcx.jpg" className="stretch" alt="" style={styles.stretch}/>
        </div>
        <LinkQuery className="link" {...this.props} style={styles.link}/>
        <h1 className="header" style={styles.header}>Welcome to the World Wide Web!</h1>
        <Link to="/"><button className="backButton btn btn-primary btn-lg" style={styles.backButton}>Add another link</button></Link>
      </div>
    );
  }
}

export default LandingPage;