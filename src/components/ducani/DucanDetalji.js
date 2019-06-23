import React from 'react'

const DucanDetalji = (props) => {
	console.log(props);
	
	const id = props.match.params.id;

	return (
		<div className="container section project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Ime dućana - id: {id}</span>
					<p>bavimo se...</p>
				</div>
				<div className="card-action grey lighten-4 grey/text">
					<div>Unio: Ime Prezime</div>
					<div>7.11.2019. u 6:10</div>
				</div>
			</div>
		</div>
	)
}

export default DucanDetalji
