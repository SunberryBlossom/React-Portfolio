import styles from './HeroSection.module.css';
import Button from '../Button/Button.jsx'

export default function HeroSection () {
    return (
        <section className={styles.section}>
            <div>
                <img />
            </div>
            <h1>
                Mae Govannen! Call me Vira
            </h1>
            <p>
                A .NET fullstack system developer based in Stockholm, Sweden, with an obsession for data-intensive applications.
            </p>
            <Button
                text="Let us work together!"
            />
        </section>
    )
}