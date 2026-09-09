import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { researchTimeline, researchMap, publication } from "../data/research";

export default function Research() {
  return (
    <section id="research" className="section-padding">
      <div className="container-max">
        <SectionHeading
          eyebrow="Research"
          title="PhD & research trajectory"
          description="From a research master's on decision-support evolution to a PhD on cloud-edge anomaly detection."
        />

        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3 space-y-6 mb-16">
            {researchTimeline.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-xl p-6"
              >
                <p className="text-xs font-mono text-accent-light mb-1">{item.period}</p>
                <h3 className="font-semibold text-lg mb-1">{item.label}</h3>
                <p className="text-ink-muted text-sm mb-2">{item.institution}</p>
                <p className="text-ink-muted text-sm italic">"{item.topic}"</p>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-mono uppercase tracking-widest text-ink-muted mb-6">
              Research map
            </p>
            <div className="glass rounded-2xl p-6">
              <div className="flex flex-col">
                {researchMap.map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="w-2.5 h-2.5 rounded-full bg-accent-light shrink-0"
                    />
                    <span className="text-sm font-medium">{step}</span>
                    {i < researchMap.length - 1 && (
                      <div className="flex-1 h-px bg-gradient-to-r from-accent-light/40 to-transparent" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Publication card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 border-l-2 border-l-accent-light"
        >
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-11 h-11 rounded-lg bg-accent/15 text-accent-light flex items-center justify-center">
              <FileText size={20} />
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-ink-muted mb-2">
                Scientific Publication
              </p>
              <h3 className="font-semibold text-lg mb-2 leading-snug">{publication.title}</h3>
              <p className="text-ink-muted text-sm mb-3">{publication.authors}</p>
              <p className="text-ink-faint text-sm">
                {publication.venue} · {publication.location} · {publication.date} · pp. {publication.pages}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
