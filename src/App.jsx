import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Skills from './components/Skills'
import trishaPhoto from './assets/trisha.png'

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
      
      <div className="main-layout">
        <div className="photo-column">
          <div className="main-photo-container">
            <div className="main-photo-placeholder">
              <img src={trishaPhoto} alt="Trisha Salerno" />
            </div>
          </div>
        </div>
        
        <div className="content-columns">
          <div className="content-column">
            <AboutMe />
            <Skills />
            <Education />
          </div>
          
          <div className="content-column">
            <Experience />
          </div>
        </div>
      </div>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Projects />
      </div>
    </div>
  )
}

export default App;