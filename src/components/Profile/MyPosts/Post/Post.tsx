import React, {useEffect, useState} from "react";
import s from './Post.module.css';

type propsType= {
    message: string,
    likesCount: number
}

const Post = (props: propsType) => {
    const [likeCounter, setLikeCounter] = useState(props.likesCount);
    const counterHandler = () =>{setLikeCounter(likeCounter+1)}

    return <div className={s.item}>
                <img src={'https://live.staticflickr.com/2883/10643657485_30bdf4ce0b_z.jpg'}/>
                    <span>{props.message}</span>
                    <span> <button onClick={counterHandler}> {likeCounter} Like</button></span>
    </div>
}

export default Post;