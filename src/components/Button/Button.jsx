import styles from './Button.module.css';

export default function Button ({ text ="default text" }) {
    return (
        <button className={styles.Button}>
            {text}
        </button>
    )
}