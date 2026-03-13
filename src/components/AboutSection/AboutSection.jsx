import styles from './AboutSection.module.css';
import aboutImage from '../../assets/about-image.jpg';

export default function AboutSection () {
    return (
        <section id="main-content" className={styles.section}>
            <article className={styles.container}>
                <h1>
                    About Vira
                </h1>
                <p>
                    My interest in code and software began in 2022 through an introduction by my peers.
                    Before then, I had spent my career in a high-intensity field solving problems whilst
                    communicating with team members as a specialist physical therapist in highly specialized healthcare.
                    Solving problems has always been a part of what makes me tick, and software development became
                    a new arena to challenge my problem-solving abilities.
                    Today, I am mostly focused on scalable, evolvable and accessible software
                    development, preferring to share that process with a team of equals around me.
                    Outside of software, I like to spend my time outside in the woods
                    with my dog and my partner, or getting lost in great books and music.
                </p>
            </article>
            <div>
                <img
                    src={aboutImage}
                    className={styles.img}
                />
            </div>
        </section>
    )
}