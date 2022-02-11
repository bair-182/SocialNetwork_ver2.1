import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {postItemType} from "../Profile";
import {dialogItemType} from "../../Dialogs/Dialogs";

type propsType = {
    postData: Array<postItemType>,
    dialogsData: Array<dialogItemType>
}

const MyPosts = (props: propsType) => {

    let postElements = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea>poka pusto</textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postElements}

            </div>
        </div>
    )
}

export default MyPosts;