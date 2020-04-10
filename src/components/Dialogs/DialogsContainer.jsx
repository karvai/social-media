import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { updateNewMessageTextAC, sendMessageAC } from "../../redux/dialogsReducer";

let mapStateToProps = (state) => {
	return {
		dialogs: state.dialogsPage.dialogs,
		messages: state.dialogsPage.messages,
		newMessageText: state.dialogsPage.newMessageText
	}
}

let mapDisatchToProps = (dispatch) => {
	return {
		sendMessage: () => {
			dispatch(sendMessageAC());
		},
		updateNewMessageText: (text) => {
			dispatch(updateNewMessageTextAC(text))
		}
	}
}

export default connect(mapStateToProps, mapDisatchToProps)(Dialogs);