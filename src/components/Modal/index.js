import React, { Component } from 'react';

import ActionBar from '../ActionBar';
import ActionButton from '../ActionButton';

class Modal extends Component {
	constructor(props){
		super(props);
				
	}

	/* 
	
	continuar modal
	
	*/

	render() {
		return (
			<div className="modal-container">
				<div className="modal-bg"></div>
				<div class="modal-area">
					<ActionBar type="static">
						<ActionButton
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
						</ActionButton>
					</ActionBar>
				</div>
				
			</div>
		);
	}
}

export default Modal;