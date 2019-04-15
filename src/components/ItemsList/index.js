import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class ItemsList extends Component {
	constructor(props){
		super(props);
		this.state = {
			todoList: []
		}

	}

	componentDidMount(){
		let itemsList = [];
		itemsList = JSON.parse(localStorage.getItem('items.list'));
		this.setState({
			todoList: [...itemsList]
		});
	}

	handleClick(title, text){
		this.props.onClick(title, text)
	}

	mountItems(){
		return(
			this.state.todoList.map((item, i) =>{
				const isLastItem = (i === (this.state.todoList.length - 1)) ? true : false;
	
				return( 
					<TodoItem
						onClick={ () => { this.handleClick(item.title, item.text) } }
						className="hover-ani"
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
					/* this.state.todoList.map((item, i) =>{
						return( 
							<TodoItem
								onClick={ () => { this.handleClick(item.title, item.text) } }
								className="hover-ani"
								key={ item.id }
								title={ item.title }
								text={ item.text }
							/>
						)
					}) */
				}
			</div>
		);
	}
}

export default ItemsList;