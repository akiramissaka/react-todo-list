import React, { Component, Fragment } from 'react';
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
			todoList: [],
			modalActive: false,
			clickedItem: {
				index: null,
				title: '',
				text: ''
			},
			selectionMode: false,
			selectedItemsIndex: []
		}

		this.buttonTimer = null;
	}

	/**
	 * Caso modo de seleção esteja ativo, o click seleciona. Caso contrário, abre o modal com os dados do item clicado.
	 */
	handleClick(index, title, text){
		if(!this.state.selectionMode){
			this.openModal(index, title, text)
		}else{
			if(this.state.selectedItemsIndex.indexOf(index) > -1){
				this.deSelectItem(index);
			}else{
				this.selectItem(index);
			}
			
		}
	}

	openModal(index, title, text){
		//if(!this.state.selectionMode){
			this.setState({
				modalActive: true,
				clickedItem: {
					index,
					title,
					text
				}
			})
		//}
	}

	closeModal(){
		this.setState({
			modalActive: false,
			clickedItem: {
				index: null,
				title: '',
				text: ''
			}
		})
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
		if(this.state.selectedItemsIndex.indexOf(index) === -1){
			this.setState({selectedItemsIndex: [...this.state.selectedItemsIndex, index]})
		}
	}

	deSelectItem(indexValue){

		const selectedItemsIndex = [...this.state.selectedItemsIndex];
		const index = selectedItemsIndex.indexOf(indexValue);

		if(selectedItemsIndex.indexOf(indexValue) > -1){
			selectedItemsIndex.splice(index, 1);
			this.setState({selectedItemsIndex: selectedItemsIndex});
		}
		
	}

	cancelSelectionMode(){
		this.setState({
			selectionMode: false,
			selectedItemsIndex: []
		})
	}

	/**
	 * Recebe um array de indices a serem deletados do state.todoList e grava o state.todoList atualizado no localstorage
	 * @param {Array} indexesTobeDeleted Array com os indices a serem deletados do state.todoList
	 */
	deleteItems(indexesTobeDeleted){
		let itemsToDeleted = [];

		indexesTobeDeleted.forEach((index) =>{
			itemsToDeleted.push(this.state.todoList[index]);
		});

		let newTodoList = this.state.todoList.filter(todoItem => {
			return itemsToDeleted.map(todoItemDel => todoItemDel.id).indexOf(todoItem.id) === -1;
		});

		this.setState({todoList: newTodoList}, () =>{
			this.cancelSelectionMode();
			localStorage.setItem('items.list', JSON.stringify(this.state.todoList))
		});
	}

	handleDeleteModal(indexTobeDeleted){
		this.closeModal();
		this.deleteItems([indexTobeDeleted]);
	}

	componentDidMount(){
		let itemsList = [];
		itemsList = JSON.parse(localStorage.getItem('items.list'));
		this.setState({
			todoList: [...itemsList]
		});
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

					{this.state.selectionMode ?
						<Fragment>
							<ActionButton
								action="remove"
								className="float-left"
								onClick={() => { this.deleteItems(this.state.selectedItemsIndex) }}
							>
								Excluir
							</ActionButton>
							<ActionButton
								action="cancel"
								className="float-right"
								onClick={() => {this.cancelSelectionMode()}}
							>
								Cancelar
							</ActionButton> 
						</Fragment>
						
					: 
						''
					}
					
				</ActionBar>
				<ItemsList
					todoList={this.state.todoList}
					selectedItemsIndex={this.state.selectedItemsIndex}
					onClick={(index, title, text) => { this.handleClick(index, title, text) }}
					onPress={() =>{ this.startPress() }}
					onRelease={() => { this.pressRelease() }}
					onDelete={() => { this.deleteItem() }}
				/>
				<Modal
					active={this.state.modalActive}
					title={this.state.clickedItem.title}
					text={this.state.clickedItem.text}
					onClose={() => {this.closeModal()}}
					onDelete={() =>{this.handleDeleteModal(this.state.clickedItem.index)}}
				/>
				
			</div>
		);
	}
}

export default App;
