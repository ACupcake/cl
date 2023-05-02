import { useState } from 'react'
import Button from './Button'
import styles from './DeleteModal.module.css'
import api from '../api/api';

function DeleteModal({ id, callBack }: { id: number, callBack: () => unknown }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleDelete = async () => {
        try {
            await api.delete(id);
            callBack()
        } catch (e) {
            console.log(e)
        }
        setIsOpen(false);
    }

    return (
        <div>
            <div className={styles.icon} onClick={() => setIsOpen(true)}>
                <img src="public/bin.png" alt="bin" width={"15px"} height={"15px"} />
            </div>
            {
                isOpen ? (
                    <div className={styles.container}>
                        <div className={styles.modal}>
                            <h3>Are you sure you want to delete this item?</h3>
                            <div className={styles.buttons}>
                                <Button state={"neutral"} onClick={() => setIsOpen(false)}>Cancel</Button>
                                <Button state={"danger"} onClick={() => handleDelete()}>Delete</Button>
                            </div>
                        </div>
                    </div >
                ) : null
            }
        </div>
    )
}

export default DeleteModal
