import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';

import Form from './components/Form';
import Field from './components/Field';
import ActionBar from './components/ActionBar';
import ActionButton from './components/ActionButton';

class NewItemPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: '',
			content: '',
			list: []
		};
	}

	componentDidMount(){
		this.setState({
			list: this.getList()
		});
	}

	handleSubmit(e){
		e.preventDefault();
		this.saveData();
	}

	handleChange(elmnt, val){
		switch(elmnt){
			case 'tx-title':
				this.setState({title: val});
				break;
			;
			case 'tx-content':
				this.setState({content: val});
				break
			
			default :

			
		}
	
	}

	getList(){
		return JSON.parse(localStorage.getItem('items.list'));
	}

	saveData(){
		const newItem = {
			id: new Date().toISOString(),
			title: this.state.title,
			text: this.state.content
		}
		this.setState(prevState => ({
			list: [...prevState.list, newItem]
		}), () =>{
			localStorage.setItem('items.list', JSON.stringify(this.state.list));
			this.goToHome();
		});
	}

	goToHome(){
		this.props.history.push('/');
	}

	render() {
		return (
			<div className="new-item-page">
				<Form onSubmit={(e) => {this.handleSubmit(e)}}>
					<ActionBar type="static">
						<ActionButton
							className="float-left"
						>
							Gravar
						</ActionButton>
						<ActionButton
							type="nav"
							path="/"
							action="remove"
							className="float-right"
						>
							Cancelar
						</ActionButton>
					</ActionBar>
					<div className="main-container">
						<h1 className="screen-title">Adicionar Item</h1>
						<Field
							type="text"
							name="title"
							classCSS="tx-title"
							label="Título"
							onChange={(elmnt, val) =>{this.handleChange(elmnt, val)}}
						/>
						<Field
							type="textarea"
							name="content"
							classCSS="tx-content"
							label="Conteúdo"
							onChange={(elmnt, val) =>{this.handleChange(elmnt, val)}}
						/>
					</div>
				</Form>
			</div>
		);
	}
}

export default withRouter(NewItemPage);