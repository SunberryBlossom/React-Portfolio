import { NavLink } from 'react-router'
import styles from './Navbar.module.css'

export default function Navbar () {
    const navClass = ({isActive}) => `${styles.link}${isActive ? ` ${styles.active}` : ''}`;

    return (
        <nav className={styles.navbar}>
            <NavLink className={navClass} to="/" end>Home</NavLink>
            <NavLink className={navClass} to="/about">About</NavLink>
            <NavLink className={navClass} to="/portfolio">Portfolio</NavLink>
            <NavLink className={navClass} to="/resume">Resume</NavLink>
            <NavLink className={navClass} to="/contact">Contact</NavLink>
        </nav>
    )
}