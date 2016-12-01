import React, { Component } from 'react';
import {IndexLink} from 'react-router';
import '../styles/LinkItem.css';

class LinkItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      text: this.props.link,
      newText: null
    };
  }
  getStoreKey() {
    return 'link-' + this.props.link;
  }
  getClicksCount() {
    const key = this.getStoreKey();
    const value = sessionStorage.getItem(key);
    return JSON.parse(value);
  }
  setClicksCount(newValue) {
    const key = this.getStoreKey();
    sessionStorage.setItem(key, newValue);
  }
  updateClicksCountState(val) {
    this.setState({
      clicks: val,
    });
  }
  componentWillMount() {
    this.updateClicksCountState(this.getClicksCount());
  }
  editLink() {
    const newText = prompt('Update your link');
    if (newText === null) {
      return this.state.text; 
    } else {
      this.setState({
        newText: newText
      }, function(){
        this.props.data.updateLink(this.props.index, this.state.newText);
      });
    }
  }
  handleClick() {
    const oldValue = this.getClicksCount();
    const newValue = oldValue + 1;
    this.setClicksCount(newValue);
    this.updateClicksCountState(newValue);
  }
  render() {
      var styles = {
        editButton: {
          background: '#9198A0',
          color: 'white',
          borderRadius: 2
        },
        deleteButton: {
          background: '#E54C3B',
          borderRadius: 2
        },
        link: {
          color: '#3178B7'
        }
      };
      const key = this.getStoreKey();
      const value = sessionStorage.getItem(key);
      return (
        <tr>
          <td>
            <IndexLink className="link" onClick={this.handleClick.bind(this)} to={{pathname: 'landing/' + this.props.link}} style={styles.link}>{this.state.newText != null ? this.state.newText : this.props.link}</IndexLink>
          </td>
          <td style={{textAlign: 'center'}}>{value ? value : 0}</td>
          <td><button className="editButton btn btn-default" onClick={this.editLink.bind(this)} style={styles.editButton}>Edit</button></td>
          <td><button className="deleteButton btn btn-danger" onClick={this.props.data.deleteLink.bind(null, this.props.index)} style={styles.deleteButton}>Delete</button></td>
        </tr>
    );
  }
}

export default LinkItem;