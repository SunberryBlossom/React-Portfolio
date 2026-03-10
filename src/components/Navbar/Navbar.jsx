import styles from './Navbar.module.css'

export default function Navbar () {
    return (
        <nav classList={styles.navbar}>
            <ul>
                <li>
                    <a>
                        Home
                    </a>
                </li>
                <li>
                    <a>
                        About
                    </a>
                </li>
                <li>
                    <a>
                        Portfolio
                    </a>
                </li>
                <li>
                    <a>
                        Resume
                    </a>
                </li>
                <li>
                    <a>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    )
}