import React, { Component } from 'react';

class LinkInput extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		text: '',
  	};
  }
  handleChange(e) {
  	e.preventDefault();
  	this.setState({
  		text: e.target.value
  	});
  }
  render() {
    var styles = {
      block: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 60,
      }
    }
    return (
        <div className="block form-group row" style={styles.block}>
          <label htmlFor="example-text-input" className="prompt col-form-label">Add a link</label>
            <div className="">
              <input className="form form-control" type="text" onChange={this.handleChange.bind(this)} />
            </div>
        		<div className="button col-md-4">
        		  <button className="btn btn-default" type="button" onClick={this.props.data.addLink.bind(null, this.state.text)}>Add</button>
            </div>
        </div>
    );
  }
}

export default LinkInput;