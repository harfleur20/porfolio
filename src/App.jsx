import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Mywork from './components/Mywork/Mywork'
import LogosScroll from './components/logoScroll/logosScroll'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <LogosScroll />
      <Mywork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App