import React, { Component } from 'react';

class LinkInput extends Component {
  constructor() {
  	super();
  	this.state = {
  		linkName: ''
  	};
  }
  handleChange(e) {
  	e.preventDefault();
  	this.setState({
  		linkName: e.target.value
  	});
  }
  render() {
  	
  	var inputStyle = {
  		margin: 40
  	}

    return (
        <div className="form-group-lg" style={inputStyle}>
        	<form onSubmit={this.props.data.addLink.bind(null, this.state.linkName)}>
        	<div className="row">
        		<div className="col-md-2">
        		 	<h3>Add a link: </h3>
        		</div>
        		<div className="col-md-8">
        			<input type="text" className="linkInput form-control" onChange={this.handleChange.bind(this)}/>
            	</div>
            	<div className="col-md-2">
            	  	<button type="button" className="btn btn-primary btn-lg" onClick={this.props.data.addLink.bind(null, this.state.linkName)}>Add</button>
            	</div>
            </div>
            </form>
    	</div>
    );
  }
}

export default LinkInput;