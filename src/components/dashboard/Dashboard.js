import React, { Component } from 'react'
import Notifications from './Notifications'
import ListaDucana from '../ducani/ListaDucana'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
	render() {
		
		// console.log(this.props);

		const { ducani, auth, notifications } = this.props;
		if ( !auth.uid ) return <Redirect to='/prijava' />

		return (
			<div className="dashboard container">
				<div className="row">
					<div className="col s12 m6">
						<ListaDucana ducani={ducani} />
					</div>
					<div className="col s12 m5 offset-m1">
						<Notifications notifications={notifications} />
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		// ducani: state.ducanProperty.ducanStuff
		ducani : state.firestore.ordered.ducani,
		auth : state.firebase.auth,
		notifications : state.firestore.ordered.notifications
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection : 'ducani', orderBy : ['datumUnosa', 'desc'] },
		{ collection : 'notifications', limit : 3, orderBy : ['time', 'desc'] }
	])
)(Dashboard)

