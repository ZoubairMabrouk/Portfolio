import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillCategories, skillRelations } from "../data/skills";

export default function Skills() {
  const [hovered, setHovered] = useState<string | null>(null);
  const related = hovered ? skillRelations[hovered] ?? [] : [];

  return (
    <section id="skills" className="section-padding bg-bg-soft/50">
      <div className="container-max">
        <SectionHeading
          eyebrow="Skills"
          title="A connected toolset"
          description="Hover a technology to see how it connects to the rest of the stack."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-sm font-mono uppercase tracking-widest text-ink-muted mb-4">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => {
                  const isHovered = hovered === skill;
                  const isRelated = related.includes(skill);
                  const dim = hovered && !isHovered && !isRelated;
                  return (
                    <span
                      key={skill}
                      onMouseEnter={() => setHovered(skill)}
                      onMouseLeave={() => setHovered(null)}
                      className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-200 cursor-default ${
                        isHovered
                          ? "bg-accent text-white border-accent scale-105"
                          : isRelated
                          ? "bg-accent/20 text-accent-light border-accent-light/50"
                          : dim
                          ? "opacity-30 border-bg-border text-ink-faint"
                          : "bg-bg-panel border-bg-border text-ink-muted"
                      }`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
