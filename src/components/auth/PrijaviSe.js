import React, { Component } from 'react'

class PrijaviSe extends Component {
	state = {
		email: "",
		password: ""
	}

	handleChange = (e) => {
		// console.log("change", e);
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleSubmit = (e) => {
		// console.log("submit", e);
		e.preventDefault();
		console.log(this.state);
	}

	render() {
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">Prijavi se</h5>
					<div className="input-field">
						<label htmlFor="email">E-mail</label>
						<input type="email" id="email" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="password">Lozinka</label>
						<input type="password" id="password" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<button className="btn pink lighten-1 z-depth-0">Prijava</button>
					</div>
				</form>
			</div>
		)
	}
}

export default PrijaviSe
