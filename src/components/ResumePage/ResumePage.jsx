import Header from "../Header/Header";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import Resume from "./resume.json";
import styles from "./ResumePage.module.css";
import cvEnglish from "../../assets/cv-elvira-mariesdotter-eng.pdf";
import cvSwedish from "../../assets/cv-elvira-mariesdotter-swe.pdf";

export default function ResumePage () {
    const data = Resume.english;

    return (
        <>
            <Header />
            <section id="main-content" className={styles.resume}>
                <h1 className={styles.title}>
                    {data.profile.title == "profile" ? "Resume" : "CV"}
                </h1>
                <article className={styles.header}>
                    <img className={styles.img} src="src/assets/resume-image.jpeg" />
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
                            .map((item) => {
                                return (
                                    <li>
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
                        education
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
                        work experience
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
                    <h2>ATS-friendly resumes</h2>
                    <div className={styles.atsContainer}>
                        <Button style={{boxShadow: "rgba(0, 0, 0, 0.4) 3px 3px 3px", backgroundColor: "var(--tertiary-color)", padding: "10px 10px"}} icon="fa-solid fa-briefcase" text="EN version" link={cvEnglish} />
                        <Button style={{boxShadow: "rgba(0, 0, 0, 0.4) 3px 3px 3px", backgroundColor: "var(--tertiary-color)", padding: "10px 10px"}} icon="fa-solid fa-briefcase" text="SW version" link={cvSwedish} />
                    </div>
                </div>
            </section>
            <section className={styles.contactSection} id="resume-contact-section">
                <h2 className={styles.contactTitle}>
                        Want to start something great?
                </h2 >
                <div className={styles.contactButtonContainer}>
                    <Button text=" Phone me!" icon="fa-solid fa-phone" link="tel:+46709421135" />
                    <Button text=" DM me!" icon="fa-solid fa-comment" link="https://www.linkedin.com/in/elviramariesdotter" />
                    <Button text=" Email me!" icon="fa-solid fa-envelope" link="mailto:wooden_anemone@pm.me" />
                </div>
            </section>
            <Footer />
        </>
    )
}