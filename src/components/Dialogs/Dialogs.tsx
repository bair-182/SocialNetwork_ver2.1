import React from "react";
import s from './Dialogs.module.css'


const Dialogs = () => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog + ' ' + s.active}>
                        Dimich
                    </div>
                    <div className={s.dialog + ' ' + s.active}>
                        Valera
                    </div>
                    <div className={s.dialog + ' ' + s.active}>
                        Victor
                    </div>
                    <div className={s.dialog}>
                        Igor
                    </div>
                    <div className={s.dialog}>
                        Andrew
                    </div>
                </div>

                <div className={s.messages}>
                    <div className={s.message}>Hi</div>
                    <div className={s.message}>How your React learning progress?</div>
                    <div className={s.message}>Very good!</div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;