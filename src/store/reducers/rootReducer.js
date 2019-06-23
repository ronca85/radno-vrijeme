import authReducer from './authReducer';
import ducanReducer from './ducanReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	auth: authReducer,
	ducanProperty: ducanReducer
})

export default rootReducer;

