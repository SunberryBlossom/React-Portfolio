import styles from './ContactSection.module.css'
import Button from '../Button/Button.jsx'

export default function ContactSection () {
    return (
        <section className={styles.section}>
            <h2>
                Get in touch with me!
            </h2>
            <div>
                <Button
                    text="Mail"
                />
                <Button
                    text="LinkedIn"
                />
                <Button
                    text="Phone"
                />
                <Button
                    text="GitHub"
                />
            </div>
        </section>
    )
}