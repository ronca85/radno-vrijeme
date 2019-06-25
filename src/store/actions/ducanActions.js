export const unesiNoviDucan = (ducan) => {
	// we're pausing the dispatch, making an async call to the database and then carrying on as normal
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		// make async call to database
		const firestore = getFirestore();
		const profilKorisnika = getState().firebase.profile;
		const autorID = getState().firebase.auth.uid;
		firestore.collection('ducani').add({
			...ducan,
			autorIme: profilKorisnika.autorIme,
			autorPrezime: profilKorisnika.autorPrezime,
			autorID: autorID,
			datumUnosa: new Date()
		}).then( () => {
			dispatch({ type: "UNESI_DUCAN", ducan })
		}).catch( (err) => {
			dispatch({ type: "UNESI_DUCAN_GRESKA", err })
		});		// the block above is a promise. it is async and takes some time to do
		// we don't want to dispatch the line below until it finishes
		// so, pass the dispatch into the arrow function inside then()
		// dispatch({ type: "UNESI_DUCAN", ducan })
	}
}

