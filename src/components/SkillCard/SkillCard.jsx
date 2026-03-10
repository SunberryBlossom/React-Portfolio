import styles from './SkillCard.module.css';

export default function SkillCard ({skillName}) {
    return (
        <div className={styles.div}>
            <h3 className={styles.h3}>
                {skillName}
            </h3>
        </div>
    )
}