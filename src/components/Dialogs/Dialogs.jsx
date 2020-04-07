import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
  let dialogs = [
    { id: 1, name: "Oleg" },
    { id: 2, name: "Igor" },
    { id: 3, name: "Ana" },
    { id: 4, name: "Pop" },
  ];

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "how are u" },
    { id: 3, message: "yo" },
    { id: 4, message: "Hi" },
    { id: 5, message: "no" },
  ];

  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
