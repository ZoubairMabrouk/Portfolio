import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className='min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-16 relative bg-cover bg-center bg-no-repeat'
       >
      
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Services />
                <Projects />
                <Contact />
              </>
            } />
          </Routes>
        </main>
        <Footer />
      
      </div>
    </Router>
  )
}

export default App