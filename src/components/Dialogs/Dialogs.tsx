import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {StoreType} from "../../redux/state";


export type dialogItemType = {
    id: string,
    name: string,
    ava: string
}

export type messageItemType = {
    id: string,
    message: string,
}

type propsType = {
    dialogsData: Array<dialogItemType>,
    messagesData: Array<messageItemType>,
    newMessageBody: string,
    store: StoreType,
}

// =====================================================

const Dialogs = (props:propsType) => {

    let dialogsElements = props.dialogsData.map(d => <DialogItem key={d.id}
                                                                 name={d.name}
                                                                 id={d.id}
                                                                 ava={d.ava}
    /> )

    let messagesElements = props.messagesData.map(m => <Message key={m.id} message={m.message} id={m.id} />)

    let onClickSendMessageHandler = () => {
        props.store.dispatch({type:"SEND-MESSAGE-TEXT"})
    }

    let onChangeMessageHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch({type: "UPDATE-NEW-MESSAGE-TEXT", body: e.currentTarget.value})
    }

    return (
        <div className={ s.dialogs }>
            <div className={ s.dialogsItems }>
                { dialogsElements }
            </div>

            <div className={ s.messages }>
                <div>{ messagesElements }</div>
                <div>
                    <div><textarea
                        value={ props.newMessageBody }
                        onChange={ onChangeMessageHandler }
                        placeholder={'Enter your message'}
                    /></div>
                    <div>
                        <button onClick={ onClickSendMessageHandler } >SEND</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;