import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Mywork from './components/Mywork/Mywork'
import LogosScroll from './components/logoScroll/logosScroll'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import QuoteModal from './components/QuoteModal/QuoteModal'

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero setIsModalOpen={setIsModalOpen} />
      <About />
      <Services setIsModalOpen={setIsModalOpen} />
      <LogosScroll />
      <Mywork />
      <Contact />
      <Footer />

      <QuoteModal 
      isOpen={isModalOpen}
      onClose={()=>setIsModalOpen(false)}
      />
    </div>
  )
}

export default App