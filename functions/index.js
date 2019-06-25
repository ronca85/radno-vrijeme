const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.https.onRequest((request, response) => {
	response.send("Hello from Firebase servers");
});

const createNotification = (notification) => {
	return admin.firestore().collection('notifications')
	.add(notification)
	.then( doc => console.log("notification added", doc) )
}

exports.projectCreated = functions.firestore
	.document('/ducani/{ducanId}')
	.onCreate(doc => {

		const ducan = doc.data();
		const notification = {
			content : "Added a new project",
			user : `${ducan.autorIme} ${ducan.autorPrezime}`,
			time : admin.firestore.FieldValue.serverTimestamp()
		}
		
		return createNotification(notification);
})

exports.userJoined = functions.auth.user()
	.onCreate(user => {

		return admin.firestore().collection('users')
			.doc(user.uid).get().then(doc =>  {

				const newUser = doc.data();
				const notification = {
					content : "Joined this thing",
					user : `${newUser.autorIme} ${newUser.autorPrezime}`,
					time : admin.firestore.FieldValue.serverTimestamp()
				}
		
				return createNotification(notification);

			})

})

