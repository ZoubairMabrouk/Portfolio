import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { buildPipeline } from "../data/skills";

export default function BuildPipeline() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding">
      <div className="container-max">
        <SectionHeading eyebrow="Process" title="How I build systems" />

        <div className="flex flex-col md:flex-row gap-3 md:gap-0 md:items-stretch">
          {buildPipeline.map((step, i) => (
            <div key={step.id} className="flex-1 flex md:items-center">
              <motion.button
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`w-full text-left glass rounded-xl p-5 transition-colors focus-ring ${
                  active === i ? "border-accent-light/60" : ""
                }`}
              >
                <span className="text-xs font-mono text-ink-faint">0{i + 1}</span>
                <p className="font-semibold mt-1 mb-3">{step.label}</p>
                <div className="flex flex-wrap gap-1.5">
                  {step.items.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg-panel border border-bg-border text-ink-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.button>
              {i < buildPipeline.length - 1 && (
                <div className="hidden md:block w-6 h-px bg-bg-border shrink-0 self-center" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
