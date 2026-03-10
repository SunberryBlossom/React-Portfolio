import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Button from "../Button/Button";

export default function ContactPage () {
    return (
        <>
            <Header />
            <h1>
                Get in touch
            </h1>
            <div>
                <h2>
                    Fill out the form to contact me directly
                </h2>
                <form>
                    <Button />
                </form>
            </div>
            <Footer />
        </>
    )
}