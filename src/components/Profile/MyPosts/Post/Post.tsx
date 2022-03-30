import React from "react";
import s from './Post.module.css';
import store from "../../../../redux/state";

type propsType= {
    messageId: string
    message: string,
    likesCount: number,
}

const Post = (props: propsType) => {
    const counterHandler = () => {
        store.dispatch({type: 'UPDATE-LIKES-COUNT', messageId: props.messageId})
    }

    return <div className={s.item}>
                    <span>{props.message}</span>
                    <span> <button onClick={counterHandler}>  {store._state.profilePage.postData.map(l => l.id === props.messageId ? l.likesCount : '')} Likes </button>
                    </span>
    </div>
}

export default Post;