import React, { Component } from 'react';
import LinkItem from './LinkItem';
/* eslint-disable */
import List from '../styles/LinkList.css'

class LinkList extends Component {
  render() {
  	var rows = [];
  	this.props.data.links.map((link, index) => rows.push(<LinkItem {...this.props} key={index} index={index} link={link}/>));
    return (
        <table>
        	<thead>
          		<tr>
            		<th>Name</th>
            		<th>Clicks</th>
            		<th>Edit</th>
            		<th>Delete</th>
          		</tr>
        	</thead>
        	<tbody>
          		{rows}
        	</tbody>
      	</table>
    );
  }
}

export default LinkList;