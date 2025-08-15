import { useState } from 'react'
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
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Aurora

        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}

        blend={0.5}

        amplitude={1.0}

        speed={0.5}

      />
      <SplashCursor />
      <NavigationBar />
      <main>
        <Home />
        <About />
        <Projects />
      </main>
  <ContactMe />
  <Footer />
    </div>
  )
}

export default App
