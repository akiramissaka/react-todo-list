import React, { Component } from 'react';

class Form extends Component {

	render() {
		return (
			<form onSubmit={this.props.onSubmit} className="form-new-item">
				{ this.props.children }
			</form>
		);
	}
}

export default Form;