import { useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import TextArea from '../components/TextArea'
import styles from './Home.module.css'
import Post from '../components/Post'
import api from '../api/api'
import { IPost } from '../types/types'
import { useSelector } from 'react-redux'

function Home() {
    const username = useSelector((state: any) => state.username.value)
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [postList, setPostList] = useState<IPost[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    let next = "";

    const isDisabled = () => {
        return title.length === 0 || content.length === 0;
    }

    const getPosts = async (nextPosts?: string) => {
        setLoading(true)
        const resp: any = await api.getAll(next);
        const data = resp['data'];

        if (nextPosts && nextPosts.length > 0) {
            setPostList(curr => curr.concat(data['results']))
        } else {
            setPostList(data['results'])
        }

        next = data['next']
        setLoading(false)
    }

    const handleCreate = async () => {
        await api.post({ title, content, username })
        setTitle("");
        setContent("");
        getPosts();
    }

    useEffect(() => {
        getPosts();
    }, [])

    const handleScroll = () => {
        if (window.scrollY === document.body.scrollHeight - window.innerHeight) {
            getPosts(next);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.headerText}>CodeLeap Network</p>
            </div>

            <div className={styles.makePostContainer}>
                <div className={styles.makePost}>
                    <div>
                        <p className={styles.makePostTitle}>What's on your mind?</p>
                    </div>
                    <div>
                        <p>Title</p>
                        <Input placeholder='Hello world' onChange={(e) => setTitle(e.target.value)} value={title} />
                        <p>Content</p>
                        <TextArea placeholder='Content here' onChange={(e) => setContent(e.target.value)} value={content} />
                    </div>
                    <div className={styles.button}>
                        <Button disabled={isDisabled()} onClick={() => handleCreate()}>Create</Button>
                    </div>
                </div>
            </div>

            {
                postList.map((post: IPost) => <Post {...post} key={post.id} />)
            }
            {loading ? <p>Loading..</p> : null}
        </div >
    )
}

export default Home
