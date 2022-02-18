import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {dialogItemType} from "../Dialogs/Dialogs";


export type postItemType = {
    id: number,
    message: string,
    likesCount: number
}

type propsType = {
    postData: Array<postItemType>,
    addPost: (postMessage: string)=> void;
}

const Profile = (props: propsType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts postData={props.postData} addPost={props.addPost}/>
    </div>
}

export default Profile;