import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

	let dialogsElements = props.dialogs.map(d => (<DialogItem name={d.name} id={d.id} />));
	let messagesElements = props.messages.map(m => (<Message message={m.message} />));


	let onSendMessageClick = () => {
		props.sendMessage();
	}

	let onMessageChange = (e) => {
		props.updateNewMessageText(e.target.value);
	};

	return (
		<div className={style.dialogs}>
			<div className={style.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={style.messages}>
				{messagesElements}
				<div>
					<textarea onChange={onMessageChange} value={props.newMessageText}></textarea>
				</div>
				<div>
					<button onClick={onSendMessageClick}>Submit</button>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
