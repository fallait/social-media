import React from 'react';
import css from './Post.module.css';
import publicUrl from '../utils/publicUrl';
import timespan from '../utils/timespan';

function Post(props) {
    var propic = props.user.photo;
    var postphoto = props.post.photo;
    return (
        <div className={css.container}>
            <div className={css.post}>
                <img src={publicUrl(propic)} className={css.propic} alt="Propic"></img>
                <p>{props.user.id}</p>
            </div>
            <div className={css.postphoto}>
                <img src={publicUrl(postphoto)} className={css.postphoto} alt="Post"></img>
            </div>
            <div></div>
            <div className={css.options}>
                <img src={publicUrl('/assets/activity.svg')} alt="Like" className={css.liked} />
                <img src={publicUrl('/assets/comment.svg')} alt="Comment" />
            </div>
            <div className={css.user}>
                <p><b>{props.likes.count} likes</b></p>
            </div>
            <div className={css.user}>
                <p><b>{props.post.userId}</b>  {props.post.desc}</p>
            </div>
            {renderComments(props.comments)}
            <div className ={css.time}>
                <p>{timespan(props.post.datetime)} ago</p>
            </div>
        </div>

    );
}

function renderComments(comments) {
    return comments.map(entry =>
            <div className={css.user}>
                <p><b>{entry.userId}</b>  {entry.text}</p>
            </div>
    )
}

export default Post;