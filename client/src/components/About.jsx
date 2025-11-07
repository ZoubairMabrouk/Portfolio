import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills = [
    { name: "React.js", level: 95 },
    { name: "PHP Laravel", level: 90 },
    {name:"ASP.NET",level:90},
    { name: "Angular", level: 85 },
    { name: "Python", level: 90 },
    { name: "MongoDB", level: 80 },
    { name: "Relational DB", level: 95 },
    { name: "Machine/Deep Learning", level: 85 },
    { name: "C/C++", level: 90 },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div ref={ref} className="container-max text-gradient">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-gradient">Me</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                I’m a passionate Junior Software Engineer, focused on creating
                digital solutions that bridge the gap between design and
                functionality. Additionally, I am an AI researcher with a deep
                interest in advanced tools and technologies.
              </p>

              <p className="text-lg text-gray-600 mb-8">
                I specialize in modern JavaScript frameworks, scalable
                architecture, and cloud technologies. My expertise extends to
                machine learning, deep learning, and embedded systems. I have a
                strong foundation in developing intelligent algorithms, building
                data-driven models, and designing efficient embedded
                applications.
              </p>

              <p className="text-lg text-gray-600 mb-8">
                Outside of coding, I’m always exploring new AI techniques,
                contributing to open-source projects, or experimenting with
                hardware and IoT devices to bridge the gap between software and
                physical systems. I’m passionate about expanding my knowledge
                and sharing insights with the developer community.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-3 gap-8 mb-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">20+</div>
                <div className="text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">5</div>
                <div className="text-gray-600">Internship</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">
                  100%
                </div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </motion.div>

            {/* Download CV Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            ><a href="/Zoubair_Mabrouk_CV_English.pdf" download>
              <button className="btn btn-primary">
                <span className="flex items-center">
                  Download CV in English
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </span>
                
              </button></a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            ><a href="/Zoubair_Mabrouk_CV_Français.pdf" download>
              <button className="btn btn-primary">
                <span className="flex items-center">
                  Download CV in French
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </span>
                
              </button></a>
            </motion.div>
          </div>

          {/* Right Column - Skills */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          inView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{ duration: 1.5, delay: 0.6 + index * 0.1 }}
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
