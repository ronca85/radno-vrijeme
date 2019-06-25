import React from 'react'
import moment from 'moment'
import 'moment/locale/hr'

export default function DucanSingle({ducan}) {
	return (
		<div>
			<div className="card z-depth-0 project-summary">
				<div className="card-content grey-text text-darken-3">
					<span className="card-title">{ ducan.imeDucana }</span>
					<p>Unio: { ducan.autorIme } { ducan.autorPrezime }</p>
					<p className="grey-text">{ moment(ducan.datumUnosa.toDate()).calendar() }</p>
				</div>
			</div>
		</div>
	)
}

