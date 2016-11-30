import React, { Component } from 'react';
import {IndexLink} from 'react-router';
/* eslint-disable */
import Item from '../styles/LinkItem.css';

class LinkItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      text: this.props.link,
      newText: null
    };
  }
  getClicksCount() {
    const localStorageRef = localStorage.getItem('link-' + this.props.link);
    if(localStorageRef) {
      this.setState({
        clicks: JSON.parse(localStorageRef)
      })
    }
  }
  componentWillMount() {
    this.getClicksCount()
  }
  editLink() {
    const newText = prompt('Update your link');
    this.setState({
      newText: newText
    }, function(){
      this.props.data.updateLink(this.props.index, this.state.newText);
    })
  }
  handleClick() {
    localStorage.setItem('link-' + this.props.link, this.state.clicks + 1);
  }
  render() {
      var styles = {
        editButton: {
          background: '#9198A0',
          color: 'white'
        },
        deleteButton: {
          background: '#E54C3B'
        }
      }
      return (
        <tr>
          <td>
              <IndexLink onClick={this.handleClick.bind(this)} to={{pathname: 'landing/' + this.props.link}}>{this.state.newText != null ? this.state.newText : this.props.link}</IndexLink>
          </td>
          <td>{this.state.clicks}</td>
          <td><button className="editButton btn btn-default" onClick={this.editLink.bind(this)} style={styles.editButton}>Edit</button></td>
          <td><button className="deleteButton btn btn-danger" onClick={this.props.data.deleteLink.bind(null, this.props.index)} style={styles.deleteButton}>Delete</button></td>
        </tr>
    );
  }
}

export default LinkItem;