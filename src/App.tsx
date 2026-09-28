import Header from './components/Header'
import Hero from './components/Hero'
import Education from './components/Education'
import Projects from './components/Projects'
import Publications from './components/Publications'
import Recognitions from './components/Recognitions'
import Skills from './components/Skills'
import Interests from './components/Interests'
import Links from './components/Links'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import './App.css'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Education />
        <Projects />
        <Publications />
        <Recognitions />
        <Skills />
        <Interests />
        <Links />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
