import { GET_STARTED } from '../actions';
import { WELCOME_TEXT } from '../constants';

function rootReducer (state = {}, action) {
	switch(action.type) {
		case GET_STARTED:
			return { welcomeText: WELCOME_TEXT };
		default:
			return state;
	}
}

export default rootReducer;

/*
 * Redux suggests use multiple reducers instead of creating multiple stores, 
 * if more than one reducer is needed, use combineReducer from 'redux' module.
 * 
 * import { composeReducers } from 'redux'
 * 
 * export default combineReducers({
 *     rootReducer
 * 	   subReducer
 * });
 * 
 */