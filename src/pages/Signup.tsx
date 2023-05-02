import { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import styles from './Signup.module.css'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { changeUsername } from '../redux/slice';

function SignUp() {
    const [username, setUsername] = useState<string>("");
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const enterButton = () => {
        if (username.length > 0) {
            navigate("/home");
        }
    }

    const handleUsernameChange = (e: any) => {
        const currName = e.target.value || "";
        setUsername(currName)
        dispatch(changeUsername(currName))
    }

    const enterPressed = (e: any) => {
        if (e.key === "Enter") {
            enterButton()
        }
    }

    return (
        <div className={styles.modal} onKeyDown={(e) => enterPressed(e)}>
            <div className={styles.title}>
                <h3>Welcome to CodeLeap network!</h3>
            </div>
            <div className={styles.inputContent}>
                <p>Please enter your username</p>
                <Input placeholder="Jonh Doe" onChange={(e) => handleUsernameChange(e)} />
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
