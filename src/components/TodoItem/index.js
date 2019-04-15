import React, { Component, Fragment } from 'react';

class TodoItem extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			className: props.className + ' todo-item'
		}
	}

	render() {
		return (
			<Fragment>
				<button
					onClick={ this.props.onClick }
					className={ this.state.className }
				>
					<div className="title">{this.props.title}</div>
					<div className="text">{this.props.text}</div>
				</button>
				{
					!this.props.isLastItem ? <hr className="sep" /> : false
				}
				
			</Fragment>
		);
	}
}

export default TodoItem;