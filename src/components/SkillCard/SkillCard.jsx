import styles from './SkillCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

export default function SkillCard ({skillName, icon, iconStyle}) {
    return (
        <div className={styles.div}>
            <h3 className={styles.h3}>
                {skillName}
            </h3>
            <FontAwesomeIcon icon={icon} style={iconStyle} />
        </div>
    )
}