import React, { Component } from 'react';
import './normalize.css';
import './App.css';

import ActionBar from './components/ActionBar';
import ActionButton from './components/ActionButton';
import ItemsList from './components/ItemsList';
import Modal from './components/Modal';

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			modalActive: false,
			selectedItem: {
				title: '',
				text: ''
			}
		}
	}

	openModal(title, text){
		//TODO alterar conteudo do modal
		this.setState({
			modalActive: true,
			selectedItem: {
				title,
				text
			}
		})
	}

	closeModal(){
		this.setState({modalActive: false})
	}

	render() {
		return (
			<div className="App">
				<ActionBar type="fixed">
					<ActionButton
						type="nav"
						path="/adiciona"
						action="new"
						className="float-left"
					>
						Adicionar
					</ActionButton>
					<ActionButton
						action="remove"
						className="float-left"
					>
						Excluir
					</ActionButton>
				</ActionBar>
				<ItemsList
					onClick={(title, text) => { this.openModal(title, text) }}
				/>
				<Modal
					onClose={() => {this.closeModal()}}
					active={this.state.modalActive}
					title={this.state.selectedItem.title}
					text={this.state.selectedItem.text}
				/>
				
			</div>
		);
	}
}

export default App;
