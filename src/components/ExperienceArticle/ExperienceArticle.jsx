import styles from './ExperienceArticle.module.css';

export default function ExperienceArticle ({timeline, title, subtitle, text}) {
    return (
        <>
        <div classList={styles.experienceGraph}>
            <p>
                {timeline}
            </p>
            <div></div>
        </div>
        <div>
            <h2>
                {title}
            </h2>
            <h3>
                {subtitle}
            </h3>
            <p>
                {text}
            </p>
        </div>
        </>
    )
}