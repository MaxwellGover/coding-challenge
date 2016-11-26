import React, { Component } from 'react';
import store from '../store';

class LinkInput extends Component {
  constructor() {
  	super();
  	this.state = {
  		textInput: ''
  	};
  }
  handleChange(e) {
  	e.preventDefault();
  	this.setState({
  		textInput: e.target.value
  	});
  }
  render() {
  	
  	var inputStyle = {
  		margin: 40
  	}

    return (
        <div className="form-group-lg" style={inputStyle}>
        	<div className="row">
        		<div className="col-md-2">
        			<h3>Add a link: </h3>
        		</div>
        		<div className="col-md-8">
            		<input type="text" className="linkInput form-control" onChange={this.handleChange.bind(this)}/>
            	</div>
            	<div className="col-md-2">
            		<button type="button" className="btn btn-primary btn-lg">Button</button>
            	</div>
            </div>
    	</div>
    );
  }
}

export default LinkInput;