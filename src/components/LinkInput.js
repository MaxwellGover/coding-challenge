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
  handleSubmit(e) {
    e.preventDefault();
    this.props.data.addLink(this.state.text);
    this.refs.linkForm.reset();
  }
  render() {
    var styles = {
      form: {
        marginTop: 20,
        marginBottom: 20
      },
      label: {
        marginRight: 15
      },
      button: {
        margin: 15,
        backgroundColor: '#3C97D3',
        borderColor: '#3C97D3',
        borderRadius: 2
      },
      input: {
        width: 400,
        borderRadius: 2
      }
    };
    return (
        <form className="form form-inline" ref="linkForm" onSubmit={this.handleSubmit.bind(this)} style={styles.form}>
          <div className="form-group">
            <label className="label" htmlFor="link" style={styles.label}>Add a link: </label>
            <input type="text" className="input form-control" onChange={this.handleChange.bind(this)} style={styles.input}/>
          </div>
          <button type="submit" className="button btn btn-primary" style={styles.button}>Add link</button>
        </form>
    );
  }
}

export default LinkInput;