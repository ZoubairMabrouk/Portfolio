import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)] opacity-70"
        aria-hidden="true"
      />
      <div className="container-max relative text-center max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Have a project, research idea, or{" "}
          <span className="text-gradient">technical challenge</span>?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-ink-muted text-lg mb-10"
        >
          Let's build something meaningful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-colors focus-ring"
          >
            <Mail size={16} /> Email me
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 glass hover:border-accent-light/50 px-6 py-3.5 rounded-xl text-sm font-semibold transition-colors focus-ring"
          >
            <FaGithub size={16} /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 glass hover:border-accent-light/50 px-6 py-3.5 rounded-xl text-sm font-semibold transition-colors focus-ring"
          >
            <FaLinkedin size={16} /> LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
