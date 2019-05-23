import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ActionButton extends Component {
	constructor(props){
		super(props);

	}

	render() {
		return (
			this.props.type === 'nav' ? (
				<Link 
					to={ this.props.path }
					className={ this.props.className }
				>{ this.props.children }</Link>
			):(
				<button
					onClick={this.props.onClick}
					className={ this.props.className }
				>
					{ this.props.children }
				</button>
			)
		);
	}
}

export default ActionButton;