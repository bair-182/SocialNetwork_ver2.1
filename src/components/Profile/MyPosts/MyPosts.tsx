import React, {ChangeEvent, KeyboardEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsTypes, StoreType} from "../../../redux/state";

type propsType = {
    store:StoreType,
    dispatch: (action: ActionsTypes) => void,
}

const MyPosts = (props: propsType) => {
    let postElements = props.store._state.profilePage.postData.map(p =>
        <Post
            key={p.id}
            messageId={p.id}
            message={p.message}
            likesCount={p.likesCount}
        />)

    let addPostHandler = () => {
        if (props.store._state.profilePage.newPostText !== '') props.dispatch({type: 'ADD-POST' })
        else alert('Post need text!')
    }

    let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: e.currentTarget.value})
    }
    let onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if ( event.charCode === 13 ) {
            event.preventDefault();
            if (props.store._state.profilePage.newPostText !== '') props.dispatch({type: 'ADD-POST' })
            else alert('Post need text!')
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea value={props.store._state.profilePage.newPostText}
                          onChange={onChangeHandler}
                          onKeyPress={onKeyPressHandler}
                />
            </div>
            <div>
                <button onClick={addPostHandler}>Add post</button>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;

