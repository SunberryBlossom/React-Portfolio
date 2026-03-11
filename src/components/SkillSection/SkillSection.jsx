import styles from './SkillSection.module.css';
import SkillCard from '../SkillCard/SkillCard';

export default function SkillSection () {
    return (
        <section className={styles.section}>
            <h2 className={styles.h2}>My Current Skillset</h2>
            <div className={styles.container}>
                <SkillCard skillName="HTML 5" icon={['fab', 'html5']} iconStyle={{ color: 'rgb(221, 75, 37)' }} />
                <SkillCard skillName="CSS 3" icon={['fab', 'css3']} iconStyle={{ color: 'rgb(53, 149, 207)' }} />
                <SkillCard skillName="JS" icon={['fab', 'square-js']} iconStyle={{ color: 'rgb(239, 216, 29)' }} />
                <SkillCard skillName="React" icon={['fab', 'react']} iconStyle={{ color: 'rgb(94, 211, 243)' }} />
                <SkillCard skillName="C# | .NET" icon={['fas', 'code']} iconStyle={{ color: 'rgb(167, 108, 225)' }} />
                <SkillCard skillName="MS SQL Server" icon={['fas', 'database']} iconStyle={{ color: 'rgb(49, 100, 140)' }} />
                <SkillCard skillName="PostGres" icon={['fas', 'database']} iconStyle={{ color: 'rgb(49, 100, 140)' }} />
                <SkillCard skillName="Docker" icon={['fab', 'docker']} iconStyle={{ color: 'rgb(19, 83, 210)' }} />
                <SkillCard skillName="Git VCS" icon={['fab', 'git-alt']} iconStyle={{ color: 'rgb(232, 77, 49)' }} />
                <SkillCard skillName="REST API" icon={['fas', 'server']} iconStyle={{ color: 'rgb(95, 94, 94)' }} />
            </div>
        </section>
    )
}