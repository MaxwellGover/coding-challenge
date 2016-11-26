import React, { Component } from 'react';
import LinkInput from '../components/LinkInput';
import LinkList from '../components/LinkList';

class LinkPage extends Component {
  render() {
    return (
      <div className="LinkPage">
        <h1 className="LinkPage-header"><b>Grow the web with referrals!</b></h1>
    	<LinkInput />
    	<LinkList />
      </div>
    );
  }
}

export default LinkPage;