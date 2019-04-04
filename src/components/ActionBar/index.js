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
					{/* <ActionButton
						type="nav"
						path="/adiciona"
						action="new"
						className="hover-ani"
					>
						Adicionar
					</ActionButton>
					<ActionButton
						action="remove"
						className="hover-ani"
					>
						Excluir
					</ActionButton> */}
					{ this.props.children }
				</div>
			</div>
			
		);
	}
}

export default ActionBar;