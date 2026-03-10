import styles from './HomePage.module.css';
import Header from '../Header/Header.jsx';
import HeroSection from '../HeroSection/HeroSection.jsx'
import SkillSection from '../SkillSection/SkillSection.jsx'
import ContactSection from '../ContactSection/ContactSection.jsx'
import Footer from '../Footer/Footer.jsx'

export default function HomePage () {
    return (
        <fragment classList={styles.fragment}>
            <Header />
            <HeroSection />
            <SkillSection />
            <ContactSection />
            <Footer />
        </fragment>
    )
}