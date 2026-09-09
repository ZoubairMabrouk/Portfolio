import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";

const layers = [
  "Software Engineering",
  "Data & Information Systems",
  "Artificial Intelligence",
  "Decision Support",
  "Research",
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <SectionHeading eyebrow="About" title="Computer Engineer & PhD Student" />
          <p className="text-ink-muted text-lg leading-relaxed mb-6">{profile.profileSummary}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-ink-muted mb-6">
            Areas of expertise
          </p>
          <div className="flex flex-col">
            {layers.map((layer, i) => (
              <div key={layer} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.4 }}
                    className="w-3 h-3 rounded-full bg-accent-light shadow-glow shrink-0 mt-1.5"
                  />
                  {i < layers.length - 1 && (
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12 + 0.1, duration: 0.5 }}
                      className="w-px bg-gradient-to-b from-accent-light/60 to-transparent flex-1 min-h-[2.2rem]"
                    />
                  )}
                </div>
                <p className="text-ink font-medium pb-8">{layer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
