import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Button from "../Button/Button";
import Styles from './ContactPage.module.css'

export default function ContactPage () {
    return (
        <>
            <Header />
            <section className={Styles.mainSection}>
                <h1 className={Styles.h1}>
                    Get in touch
                </h1>
                <div className={Styles.formContainer}>
                    <h2>
                        Fill out the form to contact me directly
                    </h2>
                    <form className={Styles.form}>
                        <fieldset>
                            <legend>
                                Contact information
                            </legend>
                            <div className={Styles.formGroup}>
                                <label className={Styles.requiredField} htmlFor="user_name">
                                    Name
                                </label>
                                <input type="text" id="user_name" name="from_name" placeholder="B. Baggins" required />
                            </div>
                            <div className={Styles.formGroup}>
                                <label className={Styles.requiredField} htmlFor="user_email">
                                    Email
                                </label>
                                <input type="email" id="user_email" name="reply_to" placeholder="MrUnderhill@shire.org" required />
                            </div>
                            <div className={Styles.formGroup}>
                                <label htmlFor="user_company">
                                    Company
                                </label>
                                <input type="text" id="user_company" name="company" placeholder="Hobbiton Consulting Inc." />
                            </div>
                        </fieldset>
                        <fieldset>
                        <legend>Reason for contact</legend>
                            <div className={Styles.formGroup}>
                                <label className={Styles.requiredField} htmlFor="reason">
                                    Why do you wish to contact me today?
                                </label>
                                <select id="reason" name="reason">
                                    <option value="job-offer">
                                        I am hiring!
                                    </option>
                                    <option value="freelance-offer">
                                        Freelance offer
                                    </option>
                                    <option value="networking">
                                        Networking
                                    </option>
                                    <option value="Collab">
                                        Collaboration
                                    </option>
                                    <option value="Misc">
                                        Something else
                                    </option>
                                </select>
                            </div>
                            <div className={Styles.formGroup}>
                                <label className={Styles.requiredField} htmlFor="message">
                                    Your message
                                </label>
                                <textarea id="message" name="message" rows="5" placeholder="Hello Vira, we would like to interview you!" required></textarea>
                            </div>
                        </fieldset>
                        <Button style={
                            {
                                maxWidth: "200px",
                                alignSelf: "center",
                                boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.4)",
                                backgroundColor: "var(--tertiary-color)"
                            }}
                            type="submit" id="submit-btn" text="Submit" />
                    </form>
                </div>
            </section>
            <Footer />
        </>
    )
}