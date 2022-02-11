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
    avaLink: Array<dialogItemType>,
}

const Profile = (props: propsType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts postData={props.postData} dialogsData={props.avaLink}/>
    </div>
}

export default Profile;