import React, { Component } from 'react'
import Notifications from './Notifications'
import ListaDucana from '../ducani/ListaDucana'
import { connect } from 'react-redux'

class Dashboard extends Component {
	render() {
		
		// console.log(this.props);

		const { ducani } = this.props;

		return (
			<div className="dashboard container">
				<div className="row">
					<div className="col s12 m6">
						<ListaDucana ducani={ducani} />
					</div>
					<div className="col s12 m5 offset-m1">
						<Notifications />
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		ducani: state.ducanProperty.ducanStuff
	}
}

export default connect(mapStateToProps)(Dashboard)

