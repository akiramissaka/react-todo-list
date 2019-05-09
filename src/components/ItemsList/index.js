import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class ItemsList extends Component {
	constructor(props){
		super(props);
		this.state = {
			todoList: []
		}
	}

	selectItem(){

	}

	handleClick(index, title, text){
		this.props.onClick(index, title, text)
	}

	handlePress(){
		this.props.onPress();
	}

	handleRelease(){
		this.props.onRelease();
	}

	componentDidMount(){
		let itemsList = [];
		itemsList = JSON.parse(localStorage.getItem('items.list'));
		this.setState({
			todoList: [...itemsList]
		});
	}

	mountItems(){
		return(
			this.state.todoList.map((item, i) =>{
				const isLastItem = (i === (this.state.todoList.length - 1)) ? true : false;

				return( 
					<TodoItem
						onClick={ () => { this.handleClick(i, item.title, item.text) } }
						onPress={ () => { this.handlePress() } }
						onRelease={ () => { this.handleRelease() } }
						className={`todo-item hover-ani ${this.props.selectedItems.indexOf(i) > -1 ? 'selected' : ''}`}
						key={ item.id }
						title={ item.title }
						text={ item.text }
						isLastItem={isLastItem}
					/>
				)
			})
		)
		
	}

	render() {
		return (
			<div className="container-items">
				{
					this.mountItems()
				}
			</div>
		);
	}
}

export default ItemsList;