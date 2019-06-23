import React from 'react'
import DucanSingle from './DucanSingle'

const ListaDucana = ({ducani}) => {
	return (
		<div className="project-list section">
			{ ducani && ducani.map( ducan => {
				return (
					<DucanSingle ducan={ducan} key={ducan.id} />
				)
			})}
		</div>
	)
}

export default ListaDucana

