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

export default function PortfolioPage () {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const imageByRepoName = {
        "munilytics": munilyticsCard,
        "the-seer": theSeerCard,
        "slava-bank": slavaBankCard,
        "lords-of-arda" : lordsOfArdaCard
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
                    { isLoading ? (
                        <div className={styles.loadingContainer}>
                            <h2>Projects are being fetched...</h2>
                        </div>
                    ) : data.filter(repo => repo.name !== "SunberryBlossom").filter(repo => repo.name !== "Portfolio").map(repo => (
                            <ProjectCard
                                key={repo.id}
                                title={String(repo.name).replaceAll("-", " ")}
                                subtitle={repo.description}
                                image={imageByRepoName[repo.name.toLowerCase()] ?? missingImage}
                            />
                        ))
                    }
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