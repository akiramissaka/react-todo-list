import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class ItemsList extends Component {
	constructor(){
		super();
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

	render() {
		return (
			<div className="container-items">
				{
					this.state.todoList.map((item) =>{
						return <TodoItem className="hover-ani" key={item.id} title={item.title} text={item.text}></TodoItem>
					})
				}
			</div>
		);
	}
}

export default ItemsList;