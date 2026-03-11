import styles from './ExperienceSection.module.css';
import ExperienceArticle from '../ExperienceArticle/ExperienceArticle.jsx';

export default function ExperienceSection () {
    return (
        <section className={styles.section}>
        <h2 className={styles.h2}>
            Experience
        </h2>
        <ExperienceArticle
            timeline="Now"
            title=".Net Fullstack Studies"
            subtitle="Chas Academy | Stockholm"
            text="Started in September of 2025, now undergoing 2 years of full-time studies working on projects individually and in teams, both within my specific tech stack, and cross-discipline with students from other classes. Learning C#, .NET, API usage, front-end development, UX, project methods including Agile methodologies, and much more. Gaining experience in problem solving, pair programming, and collaborative workflows. I am the class representative of the class NET25, acting as the mouthpiece for my class at quarterly board meetings - focusing on making sure every member of the class gets their voice heard. During this period I have led and am still leading several projects, both school-specific and hobby projects with my peers, staying ahead of the curve by introducing new frameworks, tools and architectural systems that are not a part of the curriculum. I also read books on the side regarding software development and computer science to not miss out on theory, applying it practically in all projects and hackathon events I attend."
        />
        <ExperienceArticle
            timeline="2025"
            title="Prep work"
            subtitle="FreeCodeCamp & Microsoft Learn"
            text="Completed several courses in HTML, CSS, vanilla JS, C and C# in early and mid 2025 to prepare for my studies at Chas Academy. Gained a solid foundation in web development and programming concepts, which helped me hit the ground running when I started my formal education."
        />
        </section>
    )
}