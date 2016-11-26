import React, { Component } from 'react';
import LinkItem from './LinkItem';

class LinkList extends Component {
  render() {
  	var rows = this.props.data.links;
  	rows.map((link, index) => <LinkItem {...this.props} key={index} index={index} link={link}/>)
    return (
        <div className="LinkList">
        	<table>
        		<thead>
          			<tr>
            			<th>Link Title</th>
            			<th>Clicks</th>
            			<th>Edit</th>
            			<th>Delete</th>
          			</tr>
        		</thead>
        		<tbody>{rows}</tbody>
      		</table>
        </div>
    );
  }
}

export default LinkList;