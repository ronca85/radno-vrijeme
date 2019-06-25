import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const DucanDetalji = (props) => {
	
	const { ducan, auth } = props;

	if ( !auth.uid ) return <Redirect to='/prijava' />

	if ( ducan ) {
		return (
			<div className="container section project-details">
				<div className="card z-depth-0">
					<div className="card-content">
						<span className="card-title">{ ducan.imeDucana }</span>
						<p>{ ducan.sadrzajDucana }</p>
					</div>
					<div className="card-action grey lighten-4 grey/text">
						<div>Unio: { ducan.autorIme } { ducan.autorPrezime }</div>
						<div>{ moment(ducan.datumUnosa.toDate()).calendar() }</div>
					</div>
				</div>
			</div>
		)
	} else {
		return (
			<div className="container center">
				<p>Dohvaćam dućan...</p>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	// console.log("ownProps", ownProps);
	const id = ownProps.match.params.id;
	const ducani = state.firestore.data.ducani;
	const ducan = ducani ? ducani[id] : null
	return {
		ducan : ducan,
		auth : state.firebase.auth
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'ducani' }
	])
)(DucanDetalji)

