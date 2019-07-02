import React, { Component } from 'react';

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

	this.handleChange = this.handleChange.bind(this);
	

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Select">Select...</option>
            <option value="Legacy Internet">Legacy Internet</option>
            <option value="Legacy TV">Legacy TV</option>
            <option value="Legacy Bundle">Legacy Bundle</option>
			<option value="Ignite TV">Ignite TV</option>
			<option value="Ignite Internet">Ignite Internet</option>
            <option value="Ignite Bundle">Ignite Bundle</option>
            <option value="Fido Wireless">Fido Wireless</option>
            <option value="Fido PostPaid">Fido PostPaid</option>
			<option value="Fido PrePaid">Fido PrePaid</option>
			<option value="Fido HSI">Fido HSI</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FlavorForm;