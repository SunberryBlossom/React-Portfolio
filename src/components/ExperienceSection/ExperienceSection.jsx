import styles from './ExperienceSection.module.css';
import ExperienceArticle from '../ExperienceArticle/ExperienceArticle.jsx';

export default function ExperienceSection () {
    return (
        <>
        <h2>
            Experience
        </h2>
        <ExperienceArticle
            timeline="Now"
            title=".Net Fullstack Studies"
            subtitle="Chas Academy | Stockholm"
        />
        <ExperienceArticle
            timeline="2025"
            title="Prep work"
            subtitle="FreeCodeCamp & Microsoft Learn"
        />
        </>
    )
}