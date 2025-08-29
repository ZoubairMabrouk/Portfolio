import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const menuItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container-max flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-gradient cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          Z.M
          {/* <img src="../assets/ZOUBAIR.jpg" alt="" /> */}
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.name}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              onClick={() => scrollToSection(item.id)}
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-blue-700 font-bold hover:text-primary-200'
              }`}
            >
              {item.name}
            </motion.button>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('contact')}
          className="hidden md:block btn btn-primary"
        >
          Let's Talk
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg transition-colors duration-200"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
            } ${isScrolled ? 'bg-gray-700' : 'bg-white'}`} />
            <span className={`w-full h-0.5 bg-current my-1 transition-opacity duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            } ${isScrolled ? 'bg-gray-700' : 'bg-white'}`} />
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
            } ${isScrolled ? 'bg-gray-700' : 'bg-white'}`} />
          </div>
        </button>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            x: isMobileMenuOpen ? 0 : '100%' 
          }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 h-screen w-80 bg-white shadow-2xl md:hidden flex flex-col z-40"
        >
          <div className="p-8 pt-20">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : 20
                }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-4 text-lg font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200"
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : 20
              }}
              transition={{ delay: menuItems.length * 0.1 }}
              onClick={() => scrollToSection('contact')}
              className="btn btn-primary w-full mt-6"
            >
              Let's Talk
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/20 md:hidden z-30"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </nav>
    </motion.header>
  )
}

export default Header