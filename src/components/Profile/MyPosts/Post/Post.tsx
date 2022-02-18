import React, {useState} from "react";
import s from './Post.module.css';

type propsType= {
    message: string,
    likesCount: number,
}

const Post = (props: propsType) => {
    const [likeCounter, setLikeCounter] = useState(props.likesCount);
    const counterHandler = () => {setLikeCounter(likeCounter+1)}

    return <div className={s.item}>

                    <span>{props.message}</span>
                    <span> <button onClick={counterHandler}>  {likeCounter} Likes </button>
                    </span>
    </div>
}

export default Post;