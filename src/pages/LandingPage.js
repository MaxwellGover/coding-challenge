import React, { Component } from 'react';
import LinkQuery from '../components/LinkQuery';
import {Link} from 'react-router';

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
        marginBottom: 20,
      },
      header: {
        color: '#F7F7F9',
        fontSize: '40px',
        textAlign: 'center',
        fontFamily: 'Russo One, sans-serif'
      },
      link: {
        textAlign: 'center'
      },
      back: {
        marginTop: 40
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
      <div className="container" style={styles.container}>
        <div className="background" style={styles.background}>
          <img src="https://static.pexels.com/photos/167705/pexels-photo-167705.jpeg" class="stretch" alt="" style={styles.stretch}/>
        </div>
        <LinkQuery className="link" {...this.props} style={styles.link}/>
        <h1 className="header" style={styles.header}>Welcome to the World Wide Web!</h1>
        <Link to="/"><button className="back btn btn-primary btn-lg" style={styles.back} align="center">Add another link</button></Link>
      </div>
    );
  }
}

export default LandingPage;