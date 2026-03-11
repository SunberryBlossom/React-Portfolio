import { HashRouter, Routes, Route } from "react-router"
import HomePage from "./components/HomePage/HomePage.jsx"
import AboutPage from "./components/AboutPage/AboutPage.jsx"
import PortfolioPage from "./components/PortfolioPage/PortfolioPage.jsx"
import ResumePage from "./components/ResumePage/ResumePage.jsx"
import ContactPage from "./components/ContactPage/ContactPage.jsx"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
