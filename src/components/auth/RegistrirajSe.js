import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { registracija } from '../../store/actions/authActions'

class RegistrirajSe extends Component {
	state = {
		email: "",
		password: "",
		autorIme: "",
		autorPrezime: ""
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
		// console.log(this.state);
		this.props.registracija(this.state);
	}

	render() {

		const { auth, authError } = this.props;
		if ( auth.uid ) return <Redirect to='/' />
		
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">Registriraj se</h5>
					<div className="input-field">
						<label htmlFor="email">E-mail</label>
						<input type="email" id="email" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="password">Lozinka</label>
						<input type="password" id="password" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="autorIme">Ime</label>
						<input type="text" id="autorIme" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="autorPrezime">Prezime</label>
						<input type="text" id="autorPrezime" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<button className="btn pink lighten-1 z-depth-0">Registriraj se</button>
						<div className="red-text center">
							{ authError ? <p>{ authError }</p> : null }
						</div>
					</div>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		auth : state.firebase.auth,
		authError : state.auth.authError
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		registracija : (newUser) => dispatch(registracija(newUser))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrirajSe)

