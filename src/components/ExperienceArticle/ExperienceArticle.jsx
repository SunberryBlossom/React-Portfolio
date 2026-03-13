import styles from './ExperienceArticle.module.css';

export default function ExperienceArticle ({timeline, title, subtitle, text}) {
    return (
        <article className={styles.article}>
        <div className={styles.experienceGraph}>
            <p>
                {timeline}
            </p>
            <div className={styles.line}></div>
        </div>
        <div>
            <h2 className={styles.h2}>
                {title}
            </h2>
            <h3 className={styles.h3}>
                {subtitle}
            </h3>
            <p className={styles.p}>
                {text}
            </p>
        </div>
        </article>
    )
}