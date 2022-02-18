import React, {ChangeEvent, useState} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {postItemType} from "../Profile";
import {dialogItemType} from "../../Dialogs/Dialogs";

type propsType = {
    postData: Array<postItemType>,
    addPost: (postMessage: string) => void,
}

const MyPosts = (props: propsType) => {
    let [value, setValue] = useState('')
    let postElements = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    console.log(value);

    let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let postMessage = e.currentTarget.value;
        setValue(postMessage);
    }

    let addPostHandler = () => {
        props.addPost(value)
        setValue('');
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onChangeHandler} value={value}/>
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

