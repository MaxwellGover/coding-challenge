import React, { Component } from 'react';
import Input from '../styles/LinkInput.css'
//import Input from 'react-conventions/lib/Input'

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
    return (
        <div className="LinkInput form-group-lg">
        	<form onSubmit={this.props.data.addLink.bind(null, this.state.text)}>
        		<div className="row">
        			<div className="col-md-2">
        		 		<h3>Add a link: </h3>
        			</div>
        			<div className="input-group col-md-10">
        			{/*<Input label='Input with error' value='' optClass='input-error' onChange={this.handleChange.bind(this)}/>*/}
        				<input type="text" className="linkInput form-control" onChange={this.handleChange.bind(this)}/>
        				<span className="input-group-btn">
        					<button className="btn btn-default btn-lg" type="button" onClick={this.props.data.addLink.bind(null, this.state.text)}>Add</button>
      					</span>
            		</div>
            	</div>
            </form>
    	</div>
    );
  }
}

export default LinkInput;