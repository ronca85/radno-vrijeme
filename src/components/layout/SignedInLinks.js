import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { odjava } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
	return (
		<ul className="right">
			<li><NavLink to="/unesi">Unesi radno vrijeme</NavLink></li>
			<li><NavLink to="/izmjeni">Izmjeni radno vrijeme</NavLink></li>
			<li><a onClick={props.odjava}>Odjava</a></li>
			<li><NavLink to="/profil" className="btn btn-floating blue lighten-2">
				{ props.profile.inicijali }
			</NavLink></li>
		</ul>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		odjava : () => dispatch(odjava())
	}
}

export default connect(null, mapDispatchToProps)(SignedInLinks);

