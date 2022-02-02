import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

// =======================================

type MessageType = {
    id: number,
    message: string
}

type DialogItemType = {
    id: number,
    name: string,
}

// =======================================

const Message = (props: MessageType) => {
    return <div className={s.message}>{props.message}</div>
}

const DialogItem = (props: DialogItemType) => {
    return <div>
        <NavLink to={"/dialogs/" + props.id}
                 className={navData => navData.isActive ? s.active : s.dialog}>
            {props.name}
        </NavLink>
    </div>
}

// =====================================================

const Dialogs = () => {

    let dialogsData = [
        {id: 1,name: 'Bair'},
        {id: 2,name: 'Dimich'},
        {id: 3,name: 'Valera'},
        {id: 4,name: 'Victor'},
        {id: 5,name: 'Igor'},
        {id: 6,name: 'Andrew'},
    ]

    let messagesData = [
        {id: 1, message:'Hi'},
        {id: 2, message:'How your React learning progress?'},
        {id: 3, message:'Very good!'},
        {id: 4, message:'And what about you?'},
        {id: 5, message:'Awesome!!!'},
    ]

    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItem name={dialogsData[1].name} id={dialogsData[2].id}/>
                    <DialogItem name='Valera' id={3}/>
                    <DialogItem name='Victor' id={4}/>
                    <DialogItem name='Igor' id={5}/>
                    <DialogItem name='Andrew' id={6}/>
                </div>

                <div className={s.messages}>
                    <Message message={messagesData[0].message} id={dialogsData[0].id}/>
                    <Message message={messagesData[1].message} id={dialogsData[1].id}/>
                    <Message message={messagesData[2].message} id={dialogsData[2].id}/>
                    <Message message={messagesData[3].message} id={dialogsData[3].id}/>
                    <Message message={messagesData[4].message} id={dialogsData[4].id}/>


                </div>
            </div>
    )
}

export default Dialogs;