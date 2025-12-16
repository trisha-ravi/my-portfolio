import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Skills from './components/Skills'

function App() {
  useEffect(() => {
    // Animate skill bars on mount
    const timer = setTimeout(() => {
      const skillBars = document.querySelectorAll('.skill-bar');
      skillBars.forEach((bar, index) => {
        setTimeout(() => {
          bar.style.width = bar.getAttribute('data-width');
        }, index * 100);
      });
    }, 800);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="container">
      <Header />
      
      <div className="content-single-column">
        <div className="info-section">
          <AboutMe />
          <Experience />
          <Projects />
          <Education />
          <Skills />
        </div>
      </div>
    </div>
  )
}

export default App;