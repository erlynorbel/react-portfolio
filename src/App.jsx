import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/Home.jsx'
import About from './components/About Me.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'
import ContactMe from './components/ContactMe.jsx'
import NavigationBar from './components/Navbar.jsx'
import SplashCursor from './components/SplashCursor.jsx'
import Aurora from './components/Aurora.jsx'

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact'];
      let found = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            found = id;
            break;
          }
        }
      }
      setCurrentSection(found);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='app'>
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      <SplashCursor />
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        pointerEvents: 'none',
      }}>
        <div style={{
          opacity: currentSection === 'home' ? 0 : 1,
          transition: 'opacity 0.5s',
          pointerEvents: currentSection === 'home' ? 'none' : 'auto',
        }}>
          <NavigationBar />
        </div>
      </div>
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Projects />
        </section>
      </main>
      <section id="contact">
        <ContactMe />
      </section>
      <Footer />
    </div>
  );
}

export default App
