import { createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from "./usersReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;