import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Talent from './components/Talent'
import Founder from './components/Founder'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Talent />
      <Founder />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

