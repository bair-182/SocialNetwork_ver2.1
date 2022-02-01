import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

let s ={
    'posts':'MyPosts_posts__VqnNP',
}

const MyPosts = () => {
    return <div>My posts
            <div className={s.posts}>New post</div>
            <Post message='Hi, hello!!! How are you???' likesCount={0}/>
            <Post message='It is my 1st post! Yay!!' likesCount={0}/>
        </div>
}

export default MyPosts;