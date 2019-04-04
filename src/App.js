import React, { Component } from 'react';
import './normalize.css';
import './App.css';

import ActionBar from './components/ActionBar';
import ActionButton from './components/ActionButton';
import ItemsList from './components/ItemsList';
import Modal from './components/Modal';

class App extends Component {
	render() {
		return (
			<div className="App">
				<ActionBar type="fixed">
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
				<ItemsList></ItemsList>
				<Modal
					title="dasdasdas"
					text="sdkljasl daksjdalksdj alksd jalsdk jaslkd ajsldaks djasl"
				>
					{/* <ActionBar>
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

					</ActionBar> */}
				</Modal>
			</div>
		);
	}
}

export default App;
