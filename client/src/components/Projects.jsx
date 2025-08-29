import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa'
import axios from 'axios'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects')
        if (response.data.success) {
          setProjects(response.data.projects)
        }
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <section id="projects" className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <div className="h-12 bg-gray-200 rounded w-64 mx-auto animate-pulse mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="card overflow-hidden">
                <div className="h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full animate-pulse mb-4"></div>
                  <div className="flex gap-2 mb-4">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="h-6 bg-gray-200 rounded w-16 animate-pulse"></div>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <div className="h-10 bg-gray-200 rounded w-24 animate-pulse"></div>
                    <div className="h-10 bg-gray-200 rounded w-24 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div ref={ref} className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Here are some of my recent projects that showcase my skills and passion for development.
            Visit my GitHub for more projects and contributions.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/ZoubairMabrouk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center btn btn-secondary"
          >
            <FaGithub className="mr-2" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="card overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaCode className="text-white text-3xl" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-primary-600 transition-colors duration-300">
                  {project.name}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1 + techIndex * 0.05 
                      }}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200"
                  >
                    <FaGithub className="mr-2" />
                    Code
                  </motion.a>
                  
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 p-8 bg-white rounded-2xl shadow-lg"
        >
          <div className="text-5xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Check out my GitHub profile for more projects, open-source contributions, 
            and code samples. I'm always working on something new!
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/ZoubairMabrouk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-lg px-8 py-4"
          >
            Explore My GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects