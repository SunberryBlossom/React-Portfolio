import styles from './HeroSection.module.css';
import Button from '../Button/Button.jsx'

export default function HeroSection () {
    return (
        <section className={styles.section}>
            <div className={styles.imageSection}>
                <div className={styles.imageContainer}>
                    <img className={styles.img} src="src/assets/hero-image.png" />
                </div>
            </div>
            <div className={styles.content}>
            <h1 className={styles.h1}>
                Mae Govannen! Call me Vira
            </h1>
            <p className={styles.p}>
                A .NET fullstack system developer based in Stockholm, Sweden, with an obsession for data-intensive applications.
            </p>
            <Button
                text="Let us work together!"
            />
            </div>
        </section>
    )
}