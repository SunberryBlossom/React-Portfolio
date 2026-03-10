import styles from './SkillSection.module.css';
import SkillCard from '../SkillCard/SkillCard';

export default function SkillSection () {
    return (
        <section className={styles.SkillSection}>
            <h2>My Current Skillset</h2>
            <div>
                <SkillCard skillName="HTML 5" />
                <SkillCard skillName="CSS 3" />
                <SkillCard skillName="JS" />
                <SkillCard skillName="React" />
                <SkillCard skillName="C# | .NET" />
                <SkillCard skillName="MS SQL Server" />
                <SkillCard skillName="PostGreSQL" />
                <SkillCard skillName="Docker" />
                <SkillCard skillName="Git VCS" />
                <SkillCard skillName="REST API" />
            </div>
        </section>
    )
}