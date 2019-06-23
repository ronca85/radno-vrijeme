import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
	return (
		<ul className="right">
			<li><NavLink to="/registracija">Registracija</NavLink></li>
			<li><NavLink to="/prijava">Prijava</NavLink></li>
		</ul>
	)
}

export default SignedOutLinks;

