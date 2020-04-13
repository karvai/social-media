import { createStore, combineReducers } from "redux";
import usersReducer from "./usersReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;