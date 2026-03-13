import styles from './HeroSection.module.css';
import Button from '../Button/Button.jsx'
import { useNavigate } from 'react-router';

export default function HeroSection () {
    const navigate = useNavigate();

    return (
        <section className={styles.section}>
            <div className={styles.imageSection}>
                <div className={styles.imageContainer}>
                    <img className={styles.img} src="src/assets/hero-image.png" />
                </div>
            </div>
            <div className={styles.content}>
            <h1 className={styles.h1}>
                Mae Govannen! Call me <span>Vira</span>
            </h1>
            <p className={styles.p}>
                A .NET fullstack system developer based in Stockholm, Sweden, with an obsession for data-intensive applications.
            </p>
            <Button
                onClick={() => navigate('/contact')}
                text="Let us work together!"
            />
            </div>
        </section>
    )
}