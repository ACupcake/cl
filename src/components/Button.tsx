import styles from './Button.module.css'
import { PropsWithChildren } from "react";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    state?: string;
}

const Button: React.FC<PropsWithChildren<IButton>> = ({ state, children, ...props }) => {
    const getStateColor = () => {
        switch (state) {
            case "neutral":
                return "#ffffff"
            case "confirm":
                return "#47b960";
            case "danger":
                return "#ff5151";
            default:
                return "#7695ec";
        }
    }

    function getStateStyle() {
        let style: { [key: string]: string } = { backgroundColor: getStateColor() };

        if (state === "neutral") {
            style = { ...style, color: "black", border: "1px solid gray" }
        }

        if (props.disabled) {
            return {}
        }

        return style;
    }

    return (
        <button
            {...props}
            style={getStateStyle()}
            className={styles.button}
        >
            {children}
        </button>
    )
}

export default Button
