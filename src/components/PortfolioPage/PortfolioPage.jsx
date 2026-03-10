import ProjectCard from "../ProjectCard/ProjectCard";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Button from "../Button/Button";

export default function PortfolioPage () {
    return (
        <>
            <Header />
            <section>
                <h1>
                    Featured Projects
                </h1>
                <p>
                    Take part in some of my latest inventions.
                    Click a card for more information.
                </p>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </section>
            <section>
                <div>
                    <h2>
                        Want to see more?
                    </h2>
                    <p>
                        Check out all of my projects on
                    </p>
                    <Button text="GitHub" />
                </div>
            </section>
            <Footer />
        </>
    )
}