import Header from "../Header/Header";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import Resume from "./resume.json";
import styles from "./ResumePage.module.css";

export default function ResumePage () {
    const data = Resume.english;

    return (
        <>
            <Header />
            <section className={styles.resume}>
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
                            .map( v => (
                                <li>{v}</li>
                            ))
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
                    <div>
                        {data.education.map((education, index) => (
                            <div key={index}>
                                <h3>
                                    {education.title}
                                </h3>
                                <h4>
                                    {education.subtitle}
                                </h4>
                                <p>
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
                    <div>
                        {data["work experience"].map((work, index) => (
                            <div key={index}>
                                <h3>
                                    {work.title}
                                </h3>
                                <h4>
                                    {work.subtitle}
                                </h4>
                                <p>
                                    {work.period}
                                </p>
                                <ul>
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
            <Footer />
        </>
    )
}