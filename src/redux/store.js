import { createStore, combineReducers } from "redux";
import usersReducer from "./usersReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer
});

let store = createStore(reducers);

export default store;