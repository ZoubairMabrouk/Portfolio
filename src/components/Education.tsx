import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education, certifications } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-max grid lg:grid-cols-5 gap-16">
        <div className="lg:col-span-3">
          <SectionHeading eyebrow="Education" title="Academic path" />
          <div className="space-y-6">
            {education.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-xl p-6 flex gap-4 hover:border-accent-light/40 transition-colors"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/15 text-accent-light flex items-center justify-center">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono text-accent-light mb-1">{item.period}</p>
                  <h3 className="font-semibold text-lg">{item.degree}</h3>
                  <p className="text-ink-muted text-sm mb-1">{item.institution}</p>
                  {item.topic && (
                    <p className="text-ink-muted text-sm italic">"{item.topic}"</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <p className="text-xs font-mono uppercase tracking-widest text-ink-muted mb-6">
            Certifications
          </p>
          <div className="space-y-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-xl p-5 flex items-start gap-3 hover:border-accent-light/40 transition-colors"
              >
                <Award size={18} className="text-accent-light shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm leading-snug">{cert.name}</p>
                  <p className="text-ink-faint text-xs mt-1">{cert.issuer} · {cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
