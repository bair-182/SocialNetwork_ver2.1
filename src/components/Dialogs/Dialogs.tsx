import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


export type dialogItemType = {
    id: number,
    name: string,
}

export type messageItemType = {
    id: number,
    message: string,
}

type propsType = {
    dialogsData: Array<dialogItemType>,
    messagesData: Array<messageItemType>,
}

// =====================================================

const Dialogs = (props:propsType) => {

    let dialogsElements = props.dialogsData.map(d => <DialogItem key={d.id}
                                                                 name={d.name}
                                                                 id={d.id}

    /> )
    let messagesElements = props.messagesData.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;