import React, { Component } from 'react';

import ActionBar from '../ActionBar';
import ActionButton from '../ActionButton';

class Modal extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div className={`modal-container ${this.props.active ? 'active' : ''}`}>
				<div className="modal-bg"></div>
				<div className="modal-area">
					<ActionBar type="static">
						{/* <ActionButton
							type="nav"
							path="/edita"
							action="edit"
							className="hover-ani float-left"
						>
							Editar
						</ActionButton> */}
						<ActionButton
							action="remove"
							className="hover-ani float-left"
							onClick={this.props.onDelete}
						>
							Excluir
						</ActionButton>
						<ActionButton
							onClick={this.props.onClose}
							className="hover-ani float-right"
						>
							X
						</ActionButton>
					</ActionBar>
					<div className="modal-content">
						<div className="title">{ this.props.title }</div>
						<div className="text">{ this.props.text }</div>
					</div>
				</div>
				
			</div>
		);
	}
}

export default Modal;