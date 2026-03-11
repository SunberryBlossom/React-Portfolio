import styles from './Header.module.css';
import Navbar from '../Navbar/Navbar.jsx'

export default function Header () {


    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img className={styles.img}  src="src/assets//coin_icon.png" />
                <p className={styles.logoText}>E.R. Mariesdotter</p>
            </div>
            <Navbar />
        </header>
    )
}