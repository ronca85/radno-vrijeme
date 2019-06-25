import React from 'react'
import DucanSingle from './DucanSingle'
import { Link } from 'react-router-dom'

const ListaDucana = ({ducani}) => {
	return (
		<div className="project-list section">
			{ ducani && ducani.map( ducan => {
				return (
					<Link to={'/ducan/' + ducan.id} key={ducan.id}>
						<DucanSingle ducan={ducan} />
					</Link>
				)
			})}
		</div>
	)
}

export default ListaDucana

