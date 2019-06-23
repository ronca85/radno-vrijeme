import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyDVvmtXehpb0ZKNBxv7UX8-OjhGKbhNwqg",
	authDomain: "radno-vrijeme-8e960.firebaseapp.com",
	databaseURL: "https://radno-vrijeme-8e960.firebaseio.com",
	projectId: "radno-vrijeme-8e960",
	storageBucket: "",
	messagingSenderId: "93396542669",
	appId: "1:93396542669:web:e627aa43fc7c9630"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default firebase;

