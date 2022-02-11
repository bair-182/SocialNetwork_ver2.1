import React from "react";

type avaType = {
    ava: string
}

const UserAva = (props: avaType) => {
    return <img src={props.ava}/>
}

export default UserAva;