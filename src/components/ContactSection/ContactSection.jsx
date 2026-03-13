import styles from './ContactSection.module.css'
import Button from '../Button/Button.jsx'

export default function ContactSection () {
    return (
        <section className={styles.section}>
            <h2 className={styles.h2}>
                Get in touch with me!
            </h2>
            <div className={styles.container}>
                <Button
                    style={{width: '170px', padding: '10px'}}
                    text="Mail"
                    link="mailto:wooden_anemone@pm.me"
                />
                <Button
                    style={{width: '170px', padding: '10px'}}
                    text="LinkedIn"
                    link="https://www.linkedin.com/in/elviramariesdotter"
                />
                <Button
                    style={{width: '170px', padding: '10px'}}
                    text="Phone"
                    link="tel:+46709421135"
                />
                <Button
                    style={{width: '170px', padding: '10px'}}
                    text="GitHub"
                    link="https://github.com/SunberryBlossom"
                />
            </div>
        </section>
    )
}