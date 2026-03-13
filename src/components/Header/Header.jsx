import styles from './Header.module.css';
import Navbar from '../Navbar/Navbar.jsx'
import { useEffect, useState } from 'react';
import coinIcon from '../../assets/coin_icon.png';

export default function Header () {
    const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'ithildin');

    useEffect(() => {
        document.documentElement.classList.toggle('ithildin-mode', isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'ithildin' : 'light');
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };


    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img
                    className={`${styles.img} ${isDarkMode ? styles.darkmodeImg : ''}`.trim()}
                    src={coinIcon}
                    alt="Toggle color theme"
                    onClick={toggleTheme}
                />
            </div>
            <Navbar />
        </header>
    )
}