import ProjectCard from "../ProjectCard/ProjectCard";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Button from "../Button/Button";
import styles from './PortfolioPage.module.css'
import ProjectModal from "../ProjectModal/ProjectModal.jsx"

export default function PortfolioPage () {

    return (
        <>
            <Header />
            <section className={styles.section1}>
                <h1>
                    Featured Projects
                </h1>
                <p>
                    Take part in some of my latest inventions.
                    Click a card for more information.
                </p>
                <div className={styles.cardContainer}>
                    <ProjectCard
                        title="Munilytics"
                        subtitle="Kolada-API based ROLAP"
                        image="src/assets/munilytics-card.png"
                        />
                    <ProjectCard
                        title="The Seer"
                        subtitle="Console based fortune telling"
                        image="src/assets/the-seer-card.png"

                    />
                    <ProjectCard
                        title="Slava Bank"
                        subtitle="Console based bank application"
                        image="src/assets/slava-bank-card.png"

                    />
                </div>
            </section>
            <section className={styles.section2}>
                <img src="/src/assets/portfolio-image.jpg" className={styles.img} />
                <div className={styles.textContainer}>
                    <h2>
                        Want to see more?
                    </h2>
                    <p className={styles.p}>
                        Check out all of my projects on
                    </p>
                    <Button
                        text=" On GitHub"
                        icon={["fa-brands", "fa-github"]}
                        style={{boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.4)", backgroundColor: "var(--tertiary-color)"}}
                    />
                </div>
            </section>
            <Footer />
        </>
    )
}