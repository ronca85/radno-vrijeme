import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
	return (
		<ul className="right">
			<li><NavLink to="/">Unesi radno vrijeme</NavLink></li>
			<li><NavLink to="/">Izmjeni radno vrijeme</NavLink></li>
			<li><NavLink to="/">Log Out</NavLink></li>
			<li><NavLink to="/" className="btn btn-floating blue lighten-2">User</NavLink></li>
		</ul>
	)
}

export default SignedInLinks;

