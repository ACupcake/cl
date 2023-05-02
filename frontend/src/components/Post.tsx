import styles from './Post.module.css'
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';
import { IPost } from '../types/types';

interface IPostContent extends IPost {
    callBack: () => unknown;
}

function Post({ id, content, created_datetime, title, username, callBack }: IPostContent) {

    function timeSince(date: Date) {
        const currMinusLastDate = (Number(new Date()) - Number(date))

        const seconds = Math.floor(currMinusLastDate / 1000);

        let interval = seconds / 31536000;

        if (interval > 1) {
            return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    }

    function timePassed() {
        const date = new Date(created_datetime)
        return timeSince(new Date(date)) + " ago";
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className={styles.title}>{title}</p>
                    <div className={styles.menu}>
                        {localStorage.getItem('username') === username ?
                            <>
                                <DeleteModal id={id} callBack={callBack} />
                                <EditModal id={id} currTitle={title} currContent={content} callBack={callBack} />
                            </>
                            : null
                        }
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.postInfo}>
                        <p className={styles.author}>@{username}</p>
                        <p>{timePassed()}</p>
                    </div>
                    <p className={styles.textContent}>{content}</p>
                </div>
            </div >
        </>
    )
}

export default Post
