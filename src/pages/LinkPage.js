import React, { Component } from 'react';
import LinkInput from '../components/LinkInput';
import LinkList from '../components/LinkList';

class LinkPage extends Component {
  render() {
    var styles = {
      linkPage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap',
        flexDirection: 'column',
        marginTop: 60,
      }
    };
    return (
      <div className="linkPage container" style={styles.linkPage}>
        <h1 className="header animated fadeInDown"><b>Grow the web with referrals!</b></h1>
    	  <LinkInput data={this.props}/>
    	  <LinkList data={this.props}/>
      </div>
    );
  }
}

export default LinkPage;