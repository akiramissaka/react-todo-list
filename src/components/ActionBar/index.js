import React, { Component } from 'react';

class ActionBar extends Component {
	constructor(props){
		super(props);

		this.state={
			className: 'container-' + props.type
		}
	}

	render() {
		return (
			<div className={ this.state.className }>
				<div className="container-action-buttons">
					{ this.props.children }
					<div className="clear"></div>
				</div>
			</div>
			
		);
	}
}

export default ActionBar;