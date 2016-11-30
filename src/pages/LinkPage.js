import React, { Component } from 'react';
import LinkInput from '../components/LinkInput';
import LinkList from '../components/LinkList';

class LinkPage extends Component {
  render() {
    var styles = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap',
        flexDirection: 'column',
        marginTop: 60,
      },
      header: {
        color: '#1B252F'
      }
      
    };
    return (
      <div className="container" style={styles.container}>
        <h1 className="header animated fadeInDown" style={styles.header}><b>Grow the web with referrals!</b></h1>
    	  <LinkInput data={this.props}/>
    	  <LinkList data={this.props}/>
      </div>
    );
  }
}

export default LinkPage;