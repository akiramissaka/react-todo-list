import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ActionButton extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			className: props.className
		}
	}

	render() {
		return (
			this.props.type === 'nav' ? (
				<Link 
					to={ this.props.path }
					className={ this.state.className }
				>{ this.props.children }</Link>
			):(
				<button className={ this.state.className }>{ this.props.children }</button>
			)
		);
	}
}

export default ActionButton;