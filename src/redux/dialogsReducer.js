const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
	dialogs: [
		{ id: 1, name: "Oleg" },
		{ id: 2, name: "Igor" },
		{ id: 3, name: "Ana" },
		{ id: 4, name: "Pop" },
	],

	messages: [
		{ id: 1, message: "Hi" },
		{ id: 2, message: "how are u" },
		{ id: 3, message: "yo" },
		{ id: 4, message: "Hi" },
		{ id: 5, message: "no" },
	],

	newMessageText: "ok"
};

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		case UPDATE_NEW_MESSAGE_TEXT:
			return { ...state, newMessageText: action.newMessageText }

		case SEND_MESSAGE:
			return { ...state, messages: [...state.messages, { id: 6, message: state.newMessageText }], newMessageText: "" }

		default:
			return state;
	}
}

export const sendMessageAC = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextAC = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text })

export default dialogsReducer;