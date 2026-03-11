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
                />
                <Button
                    style={{width: '170px', padding: '10px'}}
                    text="LinkedIn"
                />
                <Button
                    style={{width: '170px', padding: '10px'}}
                    text="Phone"
                />
                <Button
                    style={{width: '170px', padding: '10px'}}
                    text="GitHub"
                />
            </div>
        </section>
    )
}