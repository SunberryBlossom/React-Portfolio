import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Button from "../Button/Button";
import Styles from './ContactPage.module.css'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactPage () {
    const formRef = useRef(null);
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!formRef.current) {
            return;
        }

        setIsSending(true);
        setErrorMessage("");

        if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
            setErrorMessage("Email service is not configured yet. Please try again later.");
            setIsSending(false);
            return;
        }

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            );

            setIsSent(true);
        } catch (error) {
            const details = error?.text || error?.message || "Unknown EmailJS error";
            console.error("FAILED...", { error, details });
            setErrorMessage(
                import.meta.env.DEV
                    ? `Oops! ${details}`
                    : "Oops! Something went wrong. Please try again later."
            );
        } finally {
            setIsSending(false);
        }
    };

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
                    {isSent ? (
                        <div id="form-success-message-container" className={Styles.successMessage} role="status" aria-live="polite">
                            <span className={Styles.messageIcon} aria-hidden="true">
                                <FontAwesomeIcon icon={faCircleCheck} />
                            </span>
                            <span>
                                Thanks for reaching out. Your message was sent successfully.
                            </span>
                        </div>
                    ) : (
                    <form ref={formRef} className={Styles.form} onSubmit={handleSubmit} id="contact-form">
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
                        {errorMessage ? (
                            <p className={Styles.errorMessage} role="alert">
                                <span className={Styles.messageIcon} aria-hidden="true">
                                    <FontAwesomeIcon icon={faTriangleExclamation} />
                                </span>
                                <span>{errorMessage}</span>
                            </p>
                        ) : null}
                        <Button style={
                            {
                                maxWidth: "200px",
                                alignSelf: "center",
                                boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.4)",
                                backgroundColor: "var(--tertiary-color)"
                            }}
                            type="submit" id="submit-btn" disabled={isSending} text={isSending ? "Sending..." : "Submit"} />
                    </form>
                    )}
                </div>
            </section>
            <Footer />
        </>
    )
}