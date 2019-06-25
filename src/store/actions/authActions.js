export const prijava = (credentials) => {
	return ( dispatch, getState, { getFirebase } ) => {
		const firebase = getFirebase();

		firebase.auth().signInWithEmailAndPassword(
			credentials.email,
			credentials.password
		).then(() => {
			dispatch({ type: "LOGIN_SUCCESS" })
		}).catch((err) => {
			dispatch({ type: "LOGIN_ERROR", err })
		})
	}
}

export const odjava = () => {
	return ( dispatch, getState, { getFirebase } ) => {
		const firebase = getFirebase();

		firebase.auth().signOut().then(() => {
			dispatch({ type: "SIGNOUT_SUCCESS" })
		});
	}
}

export const registracija = (newUser) => {
	return ( dispatch, getState, { getFirebase, getFirestore } ) => {
		const firebase = getFirebase();
		const firestore = getFirestore();

		firebase.auth().createUserWithEmailAndPassword(
			newUser.email,
			newUser.password
		).then( (resp) => {
			return firestore.collection('users').doc(resp.user.uid).set({
				autorIme : newUser.autorIme,
				autorPrezime : newUser.autorPrezime,
				inicijali : newUser.autorIme[0] + newUser.autorPrezime[0]
			})
		}).then( () => {
			dispatch({ type : "REGISTRACIJA_USPJELA" })
		}).catch( (err) => {
			dispatch({ type : "REGISTRACIJA_NIJE_USPJELA", err })
		})
	}
}

