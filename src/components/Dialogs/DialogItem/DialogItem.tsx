import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {dialogItemType} from "../Dialogs";


// =======================================



// =======================================
const DialogItem = (props: dialogItemType) => {
    return <div>
        <NavLink to={"/dialogs/" + props.id}
                 className={navData => navData.isActive ? s.active : s.dialog}>
            <span><img width={50} alt={'avatarka'} src={'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'}/></span>
            {props.name}
        </NavLink>
    </div>
}

export default DialogItem;

