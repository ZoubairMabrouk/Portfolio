import React, { useState } from 'react'
import { color, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import axios from 'axios'
import toast from 'react-hot-toast'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await axios.post('https://portfolio-backend-sand-two.vercel.app/api/contact', formData)
      
      if (response.data.success) {
        toast.success(response.data.message)
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        toast.error(response.data.message || 'Failed to send message')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      if (error.response?.data?.message) {
        toast.error(error.response.data.message)
      } else if (error.response?.data?.errors?.length > 0) {
        error.response.data.errors.forEach(err => {
          toast.error(err.msg)
        })
      } else {
        toast.error('Failed to send message. Please try again.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'zoubairmabrouk55@gmail.com',
      link: 'mailto:zoubairmabrouk55@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+216 25 302 525',
      link: 'tel:+21625302525'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Sfax, Tunisia',
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/zoubair-mabrouk-8026b923a/',
      color: 'text-blue-800'
    },
    {
      icon: FaFacebook,
      name: 'Facebook',
      url: 'https://www.facebook.com/zoubair.mabrouk.5',
      color :'text-blue-500'
    },
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/ZoubairMabrouk',
      color: 'hover:text-gray-900'
    },
    {
      icon: FaInstagram,
      name: 'Instagrame',
      url: 'https://www.instagram.com/zoubairmabrouk/',
      color: 'text-purple-500 hover:text-pink-700 to-secondary-50'
    }
  ]

  return (
    <section id="contact" className="section-padding">
      <div ref={ref} className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-green-200 font-semi-bold max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-yellow-500">Let's Start a Conversation</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center group"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-200 transition-colors duration-300">
                    <info.icon className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="flex font-medium text-green-400">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-yellow-600 hover:text-primary-600 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-yellow-600">{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h1 className="font-bold text-gradient text-4xl mb-4">Follow Me</h1>
              <div className="flex justify-between ">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 hover:shadow-lg`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="card p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Enter your full name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Enter your email address"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mb-6"
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mb-8"
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="textarea-field"
                  placeholder="Tell me about your project or idea..."
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn btn-primary text-lg py-4 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Feedback/Testimonial Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-12">
            <div className="text-4xl mb-6">💬</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              What People Say
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              "Working with Zoubair was an exceptional experience. His technical expertise 
              and attention to detail resulted in a product that exceeded our expectations."
            </p>
            <div className="text-primary-600 font-medium">
              — Happy Client
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact