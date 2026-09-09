import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowRight } from "lucide-react";
import type { Project } from "../data/projects";
import { FaGithub } from "react-icons/fa";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={project.name}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3 }}
            className="relative glass rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-5 right-5 text-ink-muted hover:text-ink focus-ring"
            >
              <X size={22} />
            </button>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.categories.map((c) => (
                <span key={c} className="text-xs font-mono px-2.5 py-1 rounded-md bg-accent/15 text-accent-light">
                  {c}
                </span>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
            <p className="text-ink-muted mb-6 leading-relaxed">
              {project.longDescription ?? project.description}
            </p>

            {project.architecture && (
              <div className="mb-6">
                <p className="text-xs font-mono uppercase tracking-widest text-ink-muted mb-3">
                  Architecture
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {project.architecture.map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-lg bg-bg-panel border border-bg-border text-sm">
                        {step}
                      </span>
                      {i < project.architecture!.length - 1 && (
                        <ArrowRight size={14} className="text-ink-faint" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-8">
              <p className="text-xs font-mono uppercase tracking-widest text-ink-muted mb-3">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-bg-panel border border-bg-border text-ink-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors focus-ring"
              >
                <FaGithub size={16} /> View Code
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 glass px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors focus-ring"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
