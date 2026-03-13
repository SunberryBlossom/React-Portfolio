import styles from './Button.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)


export default function Button ({ text, icon, style, type, id, link, onClick }) {
    const handleClick = (event) => {
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
            onClick={handleClick}>
            <FontAwesomeIcon icon={icon} />
            {text}
        </button>
    )
}