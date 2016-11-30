import React, { Component } from 'react';
import LinkItem from './LinkItem';
/* eslint-disable */
import List from '../styles/LinkList.css'

class LinkList extends Component {
  render() {
    var styles = {
      heading: {
        color: '#1B252F'
      }
    }
  	var rows = [];
  	this.props.data.links.map((link, index) => rows.push(<LinkItem {...this.props} key={index} index={index} link={link}/>));
    return (
        <table>
        	<thead>
          		<tr>
            		<th className="heading" style={styles.heading}>Name</th>
            		<th className="heading" style={styles.heading}>Clicks</th>
            		<th className="heading" style={styles.heading}>Edit</th>
            		<th className="heading" style={styles.heading}>Delete</th>
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