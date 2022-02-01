import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return <div>
        <div>
            <img src='http://virtual-sevastopol.ru/album/uchkuevka/mokrousov_beach_1.jpg'
                 height={350} alt={'forTest'}>
            </img>
        </div>
        <div>AVATAR + description</div>
        <MyPosts/>
    </div>
}

export default Profile;