import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>dimma</div>
        <div className={s.dialog}>oleg</div>
        <div className={s.dialog}>igor</div>
        <div className={s.dialog}>ana</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How are u?</div>
        <div className={s.message}>Yo</div>
      </div>
    </div>
  );
};

export default Dialogs;
