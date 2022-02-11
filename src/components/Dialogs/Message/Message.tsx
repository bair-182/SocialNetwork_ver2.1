import React from "react";
import s from './../Dialogs.module.css'
import {messageItemType} from "../Dialogs";

// =======================================


// =======================================

const Message = (props: messageItemType) => {
    return <div className={s.message}>{props.message}</div>
}

export default Message;