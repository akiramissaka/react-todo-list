import React, { Component } from 'react';

class TodoItem extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			className: props.className + ' todo-item'
		}
	}

	render() {
		return (
			<button
				onClick={ this.props.onClick }
				className={ this.state.className }
			>
				<div className="title">{this.props.title}</div>
				<div className="text">{this.props.text}</div>
			</button>
		);
	}
}

export default TodoItem;