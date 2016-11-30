import React, { Component } from 'react';
import LinkItem from './LinkItem';
import '../styles/LinkList.css';

class LinkList extends Component {
  render() {
    var styles = {
      clicks: {
        color: '#1B252F',
        textAlign: 'center'
      },
      edit: {
        color: '#1B252F',
        textAlign: 'center'
      },
      remove: {
        color: '#1B252F',
        textAlign: 'center' 
      },
      name: {
        color: '#1B252F'
      }
    };
  	var rows = [];
  	this.props.data.links.map((link, index) => rows.push(<LinkItem {...this.props} key={index} index={index} link={link}/>));
    return (
        <table>
        	<thead>
          		<tr>
            		<th className="name" style={styles.heading}>Name</th>
            		<th className="clicks" style={styles.clicks}>Clicks</th>
            		<th className="edit" style={styles.edit}>Edit</th>
            		<th className="remove" style={styles.remove}>Delete</th>
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