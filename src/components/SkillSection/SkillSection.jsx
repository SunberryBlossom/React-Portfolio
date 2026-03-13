import styles from './SkillSection.module.css';
import SkillCard from '../SkillCard/SkillCard';
import { faCode, faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';
import { faCss3, faDocker, faGitAlt, faHtml5, faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons';

export default function SkillSection () {
    return (
        <section className={styles.section}>
            <h2 className={styles.h2}>My Current Skillset</h2>
            <div className={styles.container}>
                <SkillCard skillName="HTML 5" icon={faHtml5} iconStyle={{ color: 'rgb(221, 75, 37)' }} />
                <SkillCard skillName="CSS 3" icon={faCss3} iconStyle={{ color: 'rgb(53, 149, 207)' }} />
                <SkillCard skillName="JS" icon={faSquareJs} iconStyle={{ color: 'rgb(239, 216, 29)' }} />
                <SkillCard skillName="React" icon={faReact} iconStyle={{ color: 'rgb(94, 211, 243)' }} />
                <SkillCard skillName="C# | .NET" icon={faCode} iconStyle={{ color: 'rgb(167, 108, 225)' }} />
                <SkillCard skillName="MS SQL Server" icon={faDatabase} iconStyle={{ color: 'rgb(49, 100, 140)' }} />
                <SkillCard skillName="PostGres" icon={faDatabase} iconStyle={{ color: 'rgb(49, 100, 140)' }} />
                <SkillCard skillName="Docker" icon={faDocker} iconStyle={{ color: 'rgb(19, 83, 210)' }} />
                <SkillCard skillName="Git VCS" icon={faGitAlt} iconStyle={{ color: 'rgb(232, 77, 49)' }} />
                <SkillCard skillName="REST API" icon={faServer} iconStyle={{ color: 'rgb(95, 94, 94)' }} />
            </div>
        </section>
    )
}