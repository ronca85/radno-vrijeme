import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
	return (
		<ul className="right">
			<li><NavLink to="/unesi">Unesi radno vrijeme</NavLink></li>
			<li><NavLink to="/izmjeni">Izmjeni radno vrijeme</NavLink></li>
			<li><NavLink to="/odjava">Odjava</NavLink></li>
			<li><NavLink to="/profil" className="btn btn-floating blue lighten-2">Profil</NavLink></li>
		</ul>
	)
}

export default SignedInLinks;

