import React, { Component } from 'react'
import { connect } from 'react-redux'
import { prijava } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

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
		// console.log(this.state);
		this.props.prijava(this.state);
	}

	render() {

		const { authError, auth } = this.props;
		if ( auth.uid ) return <Redirect to='/' />
		
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
						<div className="red-text center">
							{ authError ? <p>{authError}</p> : null }
						</div>
					</div>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		authError : state.auth.authError,
		auth : state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		prijava : (creds) => dispatch(prijava(creds))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PrijaviSe)

