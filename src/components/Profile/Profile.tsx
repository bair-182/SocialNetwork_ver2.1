import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/state";

type propsType = {
    store: StoreType
}

const Profile = (props: propsType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts store={props.store}
                 dispatch={props.store.dispatch.bind(props.store)}
        />
    </div>
}

export default Profile;