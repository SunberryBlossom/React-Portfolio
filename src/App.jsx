import { lazy, Suspense } from "react"
import { HashRouter, Routes, Route } from "react-router"
import './App.css'

const HomePage = lazy(() => import("./components/HomePage/HomePage.jsx"))
const AboutPage = lazy(() => import("./components/AboutPage/AboutPage.jsx"))
const PortfolioPage = lazy(() => import("./components/PortfolioPage/PortfolioPage.jsx"))
const ResumePage = lazy(() => import("./components/ResumePage/ResumePage.jsx"))
const ContactPage = lazy(() => import("./components/ContactPage/ContactPage.jsx"))

function skipToMain(e) {
  e.preventDefault();
  const target = document.getElementById('main-content');
  if (target) {
    target.setAttribute('tabindex', '-1');
    target.focus();
    target.scrollIntoView();
  }
}

function App() {
  return (
    <HashRouter>
      <a href="#main-content" className="skip-link" onClick={skipToMain}>Skip to main content</a>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
