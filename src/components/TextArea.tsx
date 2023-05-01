import styles from './TextArea.module.css'

const TextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ ...props }) => {
    return (
        <textarea
            className={styles.textarea}
            {...props}
        />
    )
}

export default TextArea
