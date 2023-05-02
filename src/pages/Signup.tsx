import { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import styles from './Signup.module.css'
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [username, setUsername] = useState<string>("");
    const navigate = useNavigate();

    const enterButton = () => {
        if (username.length > 0) {
            navigate("/home");
        }
    }

    return (
        <div className={styles.modal}>
            <div className={styles.title}>
                <h3>Welcome to CodeLeap network!</h3>
            </div>
            <div className={styles.inputContent}>
                <p>Please enter your username</p>
                <Input placeholder="Jonh Doe" onChange={(e) => setUsername(e.target.value || "")} />
            </div>
            <div className={styles.enterButton}>
                <Button
                    disabled={username.length === 0}
                    onClick={() => enterButton()}
                >
                    enter
                </Button>
            </div>
        </div >
    )
}

export default SignUp