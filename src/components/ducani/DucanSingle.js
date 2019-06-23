import React from 'react'

export default function DucanSingle({ducan}) {
	return (
		<div>
			<div className="card z-depth-0 project-summary">
				<div className="card-content grey-text text-darken-3">
					<span className="card-title">{ ducan.imeDucana }</span>
					<p>Unio: Ime Prezime</p>
					<p className="grey-text">24.9.2019. u 19:35</p>
				</div>
			</div>
		</div>
	)
}
