import React, { Component } from 'react';
import {IndexLink} from 'react-router';
import Item from '../styles/LinkItem.css';

class LinkItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      text: this.props.link,
      newText: ''
    };
  }
  editLink() {
    var newText = prompt('Update your link');
    this.setState({
      newText: newText
    });
    console.log(this.state.newText);
  }
  handleClick() {
    const clicks = this.state.clicks;
    this.setState({
      clicks: clicks + 1
    });
    localStorage.setItem(`link-${this.props.link}`, JSON.stringify(clicks));
  }
  render() {
      return (
        <tr>
          <td>
              <IndexLink onClick={this.handleClick.bind(this)} to={{pathname: 'landing/' + this.props.link}}>{this.props.link}</IndexLink>
          </td>
          <td>{JSON.parse(localStorage.getItem(`link-${this.props.link}`))}</td>
          <td><button className="btn btn-default" onClick={this.editLink.bind(this)}>Edit</button></td>
          <td><button className="btn btn-danger" onClick={this.props.data.deleteLink.bind(null, this.props.index)}>Delete</button></td>
        </tr>
    );
  }
}

export default LinkItem;