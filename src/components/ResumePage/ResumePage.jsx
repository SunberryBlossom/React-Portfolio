import Header from "../Header/Header";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import Resume from "./resume.json";
import styles from "./ResumePage.module.css";
import cvEnglish from "../../assets/cv-elvira-mariesdotter-eng.pdf";
import cvSwedish from "../../assets/cv-elvira-mariesdotter-swe.pdf";
import resumeImage from "../../assets/resume-image.jpeg";
import { faBriefcase, faComment, faEnvelope, faLanguage, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function ResumePage () {
    const [language, setLanguage] = useState("english");
    const isEnglish = language === "english";
    const data = Resume[language];

    const labels = {
        resume: isEnglish ? "Resume" : "CV",
        education: isEnglish ? "education" : "utbildning",
        workExperience: isEnglish ? "work experience" : "arbetslivserfarenhet",
        atsFriendly: isEnglish ? "ATS-friendly resumes" : "ATS-vanliga CV:n",
        atsEnglishButton: isEnglish ? "EN version" : "Engelsk version",
        atsSwedishButton: isEnglish ? "SW version" : "Svensk version",
        contactTitle: isEnglish ? "Want to start something great?" : "Vill du starta något riktigt bra?",
        phoneMe: isEnglish ? " Phone me!" : " Ring mig!",
        dmMe: isEnglish ? " DM me!" : " Skriv till mig!",
        emailMe: isEnglish ? " Email me!" : " Maila mig!",
        toggleLanguageButton: isEnglish ? " På svenska" : " In English"
    };

    return (
        <>
            <Header />
            <section id="main-content" className={styles.resume}>
                <div className={styles.titleRow}>
                    <h1 className={styles.title}>
                        {labels.resume}
                    </h1>
                    <Button
                        text={labels.toggleLanguageButton}
                        icon={faLanguage}
                        style={{ padding: "8px 12px", fontSize: "0.9rem" }}
                        onClick={() => setLanguage(isEnglish ? "swedish" : "english")}
                    />
                </div>
                <article className={styles.header}>
                    <img className={styles.img} src={resumeImage} loading="lazy" decoding="async" />
                    <div className={styles.headerTextContainer}>
                        <h2 className={styles.headerTitle}>
                            {data.header.name}
                        </h2>
                        <h3 className={styles.headerSubtitle}>
                            {data.header.subtitle}
                        </h3>
                    </div>
                    <ul className={styles.headerList}>
                        {
                            data.header["personal info"]
                            .map((item, index) => {
                                return (
                                    <li key={index}>
                                        {item.isLink ? <a className={styles.a} target="_blank" href={item.link}>{item.content}</a> : item.content}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </article>
                <article className={styles.profile}>
                    <h2 className={styles.h2}>
                        {data.profile.title}
                    </h2>
                    <p>
                        {data.profile.text}
                    </p>
                </article>
                <article className={styles.education}>
                    <h2 className={styles.h2}>
                        {labels.education}
                    </h2>
                    <div className={styles.educationContainer}>
                        {data.education.map((education, index) => (
                            <div className={styles.educationGridItem} key={index}>
                                <h3 className={styles.educationTitle}>
                                    {education.title}
                                </h3>
                                <h4 className={styles.educationSubtitle}>
                                    {education.subtitle}
                                </h4>
                                <p className={styles.educationPeriod}>
                                    {education.period}
                                </p>
                            </div>
                        ))}
                    </div>
                </article>
                <article className={styles.work}>
                    <h2 className={styles.h2}>
                        {labels.workExperience}
                    </h2>
                    <div className={styles.workContainer}>
                        {data["work experience"].map((work, index) => (
                            <div className={styles.workGridItem} key={index}>
                                <h3 className={styles.workTitle}>
                                    {work.title}
                                </h3>
                                <h4 className={styles.workSubtitle}>
                                    {work.subtitle}
                                </h4>
                                <p className={styles.workPeriod}>
                                    {work.period}
                                </p>
                                <ul className={styles.workText}>
                                    {work.text.map((text, index) => (
                                        <li key={index}>
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </article>
            </section>
            <section className={styles.atsSection} id="resume-ats-section">
                <div>
                    <h2>{labels.atsFriendly}</h2>
                    <div className={styles.atsContainer}>
                        <Button style={{boxShadow: "rgba(0, 0, 0, 0.4) 3px 3px 3px", backgroundColor: "var(--tertiary-color)", padding: "10px 10px"}} icon={faBriefcase} text={labels.atsEnglishButton} link={cvEnglish} />
                        <Button style={{boxShadow: "rgba(0, 0, 0, 0.4) 3px 3px 3px", backgroundColor: "var(--tertiary-color)", padding: "10px 10px"}} icon={faBriefcase} text={labels.atsSwedishButton} link={cvSwedish} />
                    </div>
                </div>
            </section>
            <section className={styles.contactSection} id="resume-contact-section">
                <h2 className={styles.contactTitle}>
                        {labels.contactTitle}
                </h2 >
                <div className={styles.contactButtonContainer}>
                    <Button text={labels.phoneMe} icon={faPhone} link="tel:+46709421135" />
                    <Button text={labels.dmMe} icon={faComment} link="https://www.linkedin.com/in/elviramariesdotter" />
                    <Button text={labels.emailMe} icon={faEnvelope} link="mailto:wooden_anemone@pm.me" />
                </div>
            </section>
            <Footer />
        </>
    )
}