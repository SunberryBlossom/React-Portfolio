import styles from './Header.module.css';
import Navbar from '../Navbar/Navbar.jsx'

export default function Header () {
    return (
        <header classList={styles.header}>
            <img />
            <Navbar />
        </header>
    )
}