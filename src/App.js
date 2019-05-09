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
			clickedItem: {
				title: '',
				text: ''
			},
			selectionMode: false,
			selectedItems: []
		}

		this.buttonTimer = null;
	}

	/**
	 * Caso modo de seleção esteja ativo, o click seleciona. Caso contrário, abre o modal com os dados do item clicado.
	 */
	handleClick(index, title, text){
		if(!this.state.selectionMode){
			this.openModal(title, text)
		}else{
			if(this.state.selectedItems.indexOf(index) > -1){
				this.deSelectItem(index);
			}else{
				this.selectItem(index);
			}
			
		}
	}

	openModal(title, text){
		//if(!this.state.selectionMode){
			this.setState({
				modalActive: true,
				clickedItem: {
					title,
					text
				}
			})
		//}
	}

	closeModal(){
		this.setState({modalActive: false})
	}

	/**
	 * inicia o timer para o long press
	 */
	startPress(){
		//console.log(id);
		this.buttonTimer = setTimeout(() =>{ this.activateSelectionMode() }, 300);
	}

	/**
	 * Caso o botão do mouse seja liberado antes de 300ms, o long press não é acionado
	 */
	pressRelease(){
		clearTimeout(this.buttonTimer);
	}

	activateSelectionMode(){
		this.setState({selectionMode: true});
	}

	selectItem(index){
		if(this.state.selectedItems.indexOf(index) === -1){
			this.setState({selectedItems: [...this.state.selectedItems, index]})
		}
	}

	deSelectItem(indexValue){

		const selectedItems = [...this.state.selectedItems];
		const index = selectedItems.indexOf(indexValue);

		if(selectedItems.indexOf(indexValue) > -1){
			selectedItems.splice(index, 1);
			this.setState({selectedItems: selectedItems});
		}
		
	}

	cancelSelectionMode(){
		this.setState({
			selectionMode: false,
			selectedItems: []
		})
	}

	render() {
		console.log(this.state.selectedItems)
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
					{this.state.selectionMode ? 
						<ActionButton
							action="cancel"
							className="float-right"
							onClick={() => {this.cancelSelectionMode()}}
						>
							Cancelar
						</ActionButton> 
					: 
						''
					}
					
				</ActionBar>
				<ItemsList
					//onClick={(title, text) => { this.openModal(title, text) }}
					onClick={(index, title, text) => { this.handleClick(index, title, text) }}
					onPress={() =>{ this.startPress() }}
					onRelease={() => { this.pressRelease() }}
					selectedItems={this.state.selectedItems}
				/>
				<Modal
					onClose={() => {this.closeModal()}}
					active={this.state.modalActive}
					title={this.state.clickedItem.title}
					text={this.state.clickedItem.text}
				/>
				
			</div>
		);
	}
}

export default App;
