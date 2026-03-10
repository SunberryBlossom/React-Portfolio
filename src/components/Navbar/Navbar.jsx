import { Link } from 'react-router'
import styles from './Navbar.module.css'

export default function Navbar () {
    return (
        <nav className={styles.navbar}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}