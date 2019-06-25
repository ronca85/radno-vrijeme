import React, { Component } from 'react';
import { connect } from 'react-redux';
import { unesiNoviDucan } from '../../store/actions/ducanActions';
import { Redirect } from 'react-router-dom';

class UnesiDucan extends Component {
	state = {
		imeDucana: "",
		sadrzajDucana: ""
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
		this.props.unesiNoviDucan(this.state)
		this.props.history.push('/')
	}

	render() {

		const { auth } = this.props;
		if ( !auth.uid ) return <Redirect to='/prijava' />

		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">Unesi dućan</h5>
					<div className="input-field">
						<label htmlFor="imeDucana">Ime dućana</label>
						<input type="text" id="imeDucana" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="sadrzajDucana">Sadržaj dućana</label>
						<textarea className="materialize-textarea" id="sadrzajDucana" onChange={this.handleChange}></textarea>
					</div>
					<div className="input-field">
						<button className="btn pink lighten-1 z-depth-0">Unesi</button>
					</div>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		unesiNoviDucan: (ducan) => dispatch(unesiNoviDucan(ducan))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UnesiDucan)

