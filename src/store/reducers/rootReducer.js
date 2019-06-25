import authReducer from './authReducer';
import ducanReducer from './ducanReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
	auth: authReducer,
	ducanProperty: ducanReducer,
	firestore: firestoreReducer,
	firebase: firebaseReducer
})

export default rootReducer;

