import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return <div>
        <img src='http://virtual-sevastopol.ru/album/uchkuevka/mokrousov_beach_1.jpg'
             height={350} alt={'forTest'}>
        </img>

        <div className={s.descriptionBlock}>AVATAR + description</div>
    </div>
}

export default ProfileInfo;