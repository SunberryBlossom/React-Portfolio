import Header from "../Header/Header";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import Resume from "./resume.json";

export default function ResumePage () {
    const data = Resume.english;

    return (
        <>
            <Header />
            <section>
                <h1>
                    {data.profile.title == "profile" ? "Resume" : "CV"}
                </h1>
                <article>
                    <img src="src/assets/resume-image.jpeg" />
                    <h2>
                        {data.header.name}
                    </h2>
                    <h3>
                        {data.header.subtitle}
                    </h3>
                    <p>
                        {
                            data.header["personal info"]
                            .map( v => `${v} | ` )
                        }
                    </p>
                </article>
                <article>
                    <h2>
                        {data.profile.title}
                    </h2>
                    <p>
                        {data.profile.text}
                    </p>
                </article>
                <article>
                    <h2>
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
                <article>
                    <h2>
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