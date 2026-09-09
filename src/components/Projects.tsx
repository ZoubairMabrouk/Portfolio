import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ProjectModal from "./ProjectModal";
import { projects, categoryLabels, type Project, type ProjectCategory } from "../data/projects";
import { FaGithub } from "react-icons/fa";

const filters: ("All" | ProjectCategory)[] = ["All", "AI", "Software", "Data", "Research", "IoT"];

export default function Projects() {
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const featured = projects.filter((p) => p.featured);
  const filtered = useMemo(
    () => projects.filter((p) => filter === "All" || p.categories.includes(filter)),
    [filter]
  );

  return (
    <section id="projects" className="section-padding bg-bg-soft/50">
      <div className="container-max">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A mix of research prototypes, decision-support tooling and full-stack builds — sourced from my GitHub."
        />

        {/* Featured panels */}
        <div className="flex flex-col gap-6 mb-16">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setSelected(project)}
              className="group glass rounded-2xl p-8 md:p-10 cursor-pointer hover:border-accent-light/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
                <div className="flex-1">
                  <p className="text-xs font-mono uppercase tracking-widest text-accent-light mb-3">
                    Featured Project
                  </p>
                  <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                  <p className="text-ink-muted mb-5 max-w-xl">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.slice(0, 5).map((t) => (
                      <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-bg-panel border border-bg-border text-ink-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent-light group-hover:gap-3 transition-all"
                  >
                    <FaGithub size={16} /> GitHub <ArrowRight size={14} />
                  </a>
                </div>
                <div className="hidden md:flex w-40 h-40 rounded-xl border border-bg-border bg-bg-panel items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-accent-light/40 transition-transform">
                  <FaGithub size={40} className="text-ink-faint" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus-ring ${
                filter === f
                  ? "bg-accent text-white"
                  : "glass text-ink-muted hover:text-ink"
              }`}
            >
              {categoryLabels[f]}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelected(project)}
                whileHover={{ y: -6 }}
                className="glass rounded-xl p-6 cursor-pointer hover:border-accent-light/50 transition-colors flex flex-col"
              >
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.categories.map((c) => (
                    <span key={c} className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent/15 text-accent-light">
                      {c}
                    </span>
                  ))}
                </div>
                <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
                <p className="text-ink-muted text-sm mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg-panel border border-bg-border text-ink-faint">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-14">
          <a
            href="https://github.com/ZoubairMabrouk"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 glass px-5 py-3 rounded-xl text-sm font-semibold hover:border-accent-light/50 transition-colors focus-ring"
          >
            <FaGithub size={16} /> Explore all repositories on GitHub
          </a>
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
