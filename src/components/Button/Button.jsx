import styles from './Button.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Button ({ text, icon, style, type, id, link, onClick, disabled = false }) {
    const handleClick = (event) => {
        if (disabled) {
            event.preventDefault();
            return;
        }

        if (onClick) {
            onClick(event);
        }

        if (link) {
            window.open(link, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <button
            type={type ?? "button"}
            id={id}
            className={styles.button}
            style={style}
            onClick={handleClick}
            disabled={disabled}>
            {icon ? <FontAwesomeIcon icon={icon} /> : null}
            {text}
        </button>
    )
}