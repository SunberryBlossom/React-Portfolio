import ProjectCard from "../ProjectCard/ProjectCard";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Button from "../Button/Button";
import styles from './PortfolioPage.module.css'
import { useEffect, useState } from "react";
import munilyticsCard from "../../assets/munilytics-card.png";
import theSeerCard from "../../assets/the-seer-card.png";
import slavaBankCard from "../../assets/slava-bank-card.png";
import lordsOfArdaCard from "../../assets/lords-of-arda-card.jpg"
import missingImage from "../../assets/missing-project-image.jpg"
import portfolioImage from "../../assets/portfolio-image.jpg";
import { createPortal } from "react-dom";
import ProjectModal from "../ProjectModal/ProjectModal";

export default function PortfolioPage () {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setProject] = useState({});

    const infoByRepoName = {
        "munilytics":
            {
                image : munilyticsCard,
                text : "This ongoing project is built with me as SCRUM-master and developer with four class peers as a hobby project. My vision for Munilytics started after having read Kleppmann's book on data-intensive applications, and I wanted us to challenge ourselves by building something that was outside of our school curriculum. Munilytics is an Aspire orchestrated ASP.NET app with a data warehouse and a ROLAP on top of it. The data is extracted and synced with the KOLADA API."
            },
        "the-seer":
            {
                image : theSeerCard,
                text : "This solo hobby project is on its second version, structured with an N-tier architecture. The Seer is an interactive console application that let's you pick and choose different card decks (and other means like nordic runes) to get fortune tellings. These are logged locally in a Code-first written EF-Core database. The user can also write diary logs connected to their readings. This is my solo hobby project that I recreate in more technical versions alongside my studies, to push myself and implement what I learn. The next version is planned to be a web application to give graphic life to The Seer herself."
            },
        "slava-bank":
            {
                image : slavaBankCard,
                text : "This is my team's examination project from our fundamental C# course at Chas Academy. We built a bank-application with a completely new from-the-ground- up HTML/CSS mocking layout inside a console, instead of using Spectre Console or similar libraries."
            },
        "lords-of-arda" :
            {
                image : lordsOfArdaCard,
                text : "The first ever collaborative project I ever participated in. Started out of my love for Tolkien. My biggest role in this was as Agile leader, leading standups, retros and making sure every peer that participated felt included and had a task to work on."
            }
    };

    useEffect(
        () => {
            fetch("https://api.github.com/users/SunberryBlossom/repos")
            .then((result) => result.json())
            .then((apiData) => setData(Array.isArray(apiData) ? apiData : []))
            .catch(() => setData([]))
            .finally(() => setIsLoading(false))
        }
        ,[]
    )


    return (
        <>
            {showModal && selectedProject.id && createPortal(
                <ProjectModal
                    imageUrl={infoByRepoName[selectedProject.name.toLowerCase()].image ?? missingImage}
                    title={String(selectedProject.name || "").replaceAll("-", " ")}
                    text={infoByRepoName[selectedProject.name.toLowerCase()].text || "No description provided."}
                    onClose={() => setShowModal(false)}
                    link={selectedProject.html_url}
                />,
                document.body
            )}
            <Header />
            <section id="main-content" className={styles.section1}>
                <h1>
                    Featured Projects
                </h1>
                <p>
                    Take part in some of my latest inventions.
                    Click a card for more information.
                </p>
                <div className={styles.cardContainer}>
                    { isLoading ? (
                        <div className={styles.loadingContainer}>
                            <h2>Projects are being fetched...</h2>
                        </div>
                    ) : data.filter(repo => repo.name !== "SunberryBlossom").filter(repo => repo.name !== "Portfolio").map(repo => (
                            <ProjectCard
                                key={repo.id}
                                onClick={() => {
                                    setProject(repo);
                                    setShowModal(true);
                                }}
                                title={String(repo.name).replaceAll("-", " ")}
                                subtitle={repo.description}
                                image={infoByRepoName[repo.name.toLowerCase()].image ?? missingImage}
                            />
                        ))
                    }
                </div>
            </section>
            <section className={styles.section2}>
                <img src={portfolioImage} className={styles.img} />
                <div className={styles.textContainer}>
                    <h2>
                        Want to see more?
                    </h2>
                    <p className={styles.p}>
                        Check out all of my projects on
                    </p>
                    <Button
                        text=" On GitHub"
                        link="https://github.com/SunberryBlossom"
                        icon={["fa-brands", "fa-github"]}
                        style={{boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.4)", backgroundColor: "var(--tertiary-color)"}}
                    />
                </div>
            </section>
            <Footer />
        </>
    )
}