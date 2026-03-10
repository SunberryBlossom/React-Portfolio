import Header from "../Header/Header";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";

export default function ResumePage () {
    return (
        <>
            <Header />
            <section>
                <h1>
                    Resume
                </h1>
                <img />
                <article>
                    <h2>
                        Profile
                    </h2>
                </article>
                <article>
                    <h2>
                        Education
                    </h2>
                </article>
                <article>
                    <h2>
                        Skills
                    </h2>
                </article>
                <article>
                    <h2>
                        Work Experience
                    </h2>
                </article>
            </section>
            <section>
                <div>
                    <h2>
                        ATS-friendly resumes
                    </h2>
                    <Button />
                    <Button />
                </div>
            </section>
            <section>
                <h2>
                    Want to start something great?
                </h2>
                <Button />
                <Button />
            </section>
            <Footer />
        </>
    )
}