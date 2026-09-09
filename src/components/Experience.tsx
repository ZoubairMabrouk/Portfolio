import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/experience";

export default function Experience() {
  const [openId, setOpenId] = useState<string | null>(experience[0]?.id ?? null);

  return (
    <section id="experience" className="section-padding bg-bg-soft/50">
      <div className="container-max">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've built things"
          description="Internships spanning decision support platforms, industrial monitoring, and open-source integration."
        />

        <div className="relative border-l border-bg-border ml-3">
          {experience.map((item, i) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8 pb-10 last:pb-0"
              >
                <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-accent border-4 border-bg" />
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full text-left glass rounded-xl p-6 hover:border-accent-light/50 transition-colors focus-ring"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-mono text-accent-light mb-1">{item.period}</p>
                      <h3 className="text-xl font-semibold">{item.role}</h3>
                      <p className="text-ink-muted">{item.company}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 mt-1 text-ink-muted"
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-5 mt-5 border-t border-bg-border">
                          <ul className="space-y-2 mb-5">
                            {item.bullets.map((b, idx) => (
                              <li key={idx} className="text-ink-muted text-sm flex gap-2">
                                <span className="text-accent-light mt-1">▹</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((t) => (
                              <span
                                key={t}
                                className="text-xs font-mono px-2.5 py-1 rounded-md bg-bg-panel border border-bg-border text-ink-muted"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
