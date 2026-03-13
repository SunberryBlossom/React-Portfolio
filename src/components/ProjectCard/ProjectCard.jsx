import styles from './ProjectCard.module.css'


export default function ProjectCard ({title, subtitle, image, onClick}) {
    return (
        <button onClick={onClick} className={styles.card}>
            <img src={image} className={styles.img} />
            <div className={styles.content}>
                <h2 className={styles.h2}>{title}</h2>
                <p className={styles.p}>{subtitle}</p>
            </div>
        </button>
    )
}