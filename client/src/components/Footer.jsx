import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaFacebook, FaInstagram, FaMailBulk } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
          icon: FaLinkedin,
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/zoubair-mabrouk-8026b923a/'
        },
        {
          icon: FaFacebook,
          name: 'Facebook',
          url: 'https://www.facebook.com/zoubair.mabrouk.5'
        },
        {
          icon: FaGithub,
          name: 'GitHub',
          url: 'https://github.com/ZoubairMabrouk'
        },
        {
          icon: FaInstagram,
          name: 'Instagrame',
          url: 'https://www.instagram.com/zoubairmabrouk/'
        },
        {
          icon:FaEnvelope,
          name:"Email",
          url:'mailto:zoubairmabrouk55@gmail.com'
        }
  ]

  const quickLinks = [
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold text-gradient mb-4 cursor-pointer inline-block"
              onClick={scrollToTop}
            >
              Zoubair Mabrouk
            </motion.div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Full-Stack Developer passionate about creating innovative digital solutions. 
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3 text-gray-400">
              <p>
                <a 
                  href="mailto:zoubairmabrouk55@gmail.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  zoubairmabrouk55@gmail.com
                </a>
              </p>
              <p>
                <a 
                  href="tel:+216253025"
                  className="hover:text-white transition-colors duration-300"
                >
                  +216 25 302 525
                </a>
              </p>
              <p>Sfax, Tunisia</p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mt-4"
              >
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn btn-primary"
                >
                  Start a Project
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <p className="flex items-center">
              © {currentYear} Zoubair Mabrouk. Made with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mx-1 text-red-500"
              >
                <FaHeart size={14} />
              </motion.span>
              and lots of ☕
            </p>
          </div>
          
          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white hover:bg-primary-700 transition-all duration-300"
            aria-label="Back to top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer