import styles from './AboutPage.module.css';
import Header from '../Header/Header.jsx'
import AboutSection from '../AboutSection/AboutSection.jsx'
import ExperienceSection from '../ExperienceSection/ExperienceSection.jsx'
import Footer from '../Footer/Footer.jsx'

export default function AboutPage () {
    return (
        <>
        <Header />
        <AboutSection />
        <ExperienceSection />
        <Footer />
        </>
    )
}