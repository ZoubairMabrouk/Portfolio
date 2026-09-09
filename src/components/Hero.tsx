import { motion } from "framer-motion";
import { Mail, Download, ArrowRight } from "lucide-react";
import { profile } from "../data/profile";
import TechConstellation from "./TechConstellation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)]"
        aria-hidden="true"
      />
      <div className="container-max relative grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block glass px-4 py-1.5 rounded-full text-xs font-medium text-ink-muted mb-6"
          >
            Computer Engineer · PhD Student
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] tracking-tight mb-6"
          >
            Building{" "}
            <span className="text-gradient">intelligent software</span> and
            data-driven decision systems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-ink-muted max-w-xl mb-8"
          >
            {profile.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white px-5 py-3 rounded-xl text-sm font-semibold transition-colors focus-ring"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
 <a
    href={profile.cvFileEn}
    download
    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg
               text-sm font-semibold text-ink
               hover:bg-bg-panel
               hover:text-accent-light
               transition-all duration-200
               focus-ring"
  >
    <Download size={15} />
    <span>CV</span>
    <span className="text-xs text-ink-muted">EN</span>
  </a>

  <div className="w-px h-5 bg-bg-border" />

  <a
    href={profile.cvFileFr}
    download
    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg
               text-sm font-semibold text-ink
               hover:bg-bg-panel
               hover:text-accent-light
               transition-all duration-200
               focus-ring"
  >
    <Download size={15} />
    <span>CV</span>
    <span className="text-xs text-ink-muted">FR</span>
  </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex items-center gap-5 text-ink-muted"
          >
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-ink transition-colors focus-ring">
              <FaGithub size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-ink transition-colors focus-ring">
              <FaLinkedin size={20} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-ink transition-colors focus-ring">
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <TechConstellation />
        </motion.div>
      </div>
    </section>
  );
}
