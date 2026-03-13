import styles from './SkillCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SkillCard ({skillName, icon, iconStyle}) {
    return (
            <div className={styles.skillCard}>
                <h3 className={styles.h3}>
                    {skillName}
                </h3>
                <FontAwesomeIcon
                    className={styles.iconSize}
                    icon={icon}
                    style={iconStyle}
                />
            </div>
    )
}