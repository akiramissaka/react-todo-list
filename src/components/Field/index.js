import React, { Component } from 'react';

class Field extends Component {

	constructor(props){
		super(props);

		this.state = {
			value: ''
		}
	}

	handleChange(e){
		//Callback no setState para pegar o valor do state após a mudança pois setState é assícrono
		this.setState({value: e.target.value}, () =>{
			this.props.onChange(this.props.classCSS, this.state.value);
		});
	}

	render() {
		return (

			<div className="form-row">
				<div className="form-col">
					<label className="label">{ this.props.label }</label>
					{this.props.type === 'textarea' ? 
						<textarea
							className={this.props.classCSS}
							value={this.state.value}
							onChange={(e) =>{this.handleChange(e)}}
						>
						</textarea>
					:
						<input 
							type={this.props.type}
							className={this.props.classCSS}
							//onChange={() => {this.props.onChange('aaa')}}
							value={this.state.value}
							onChange={(e) =>{this.handleChange(e)}}
						/>
					}
				</div>
			</div>	

		);
	}
}

export default Field;