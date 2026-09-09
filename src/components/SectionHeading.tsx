import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mb-14"
    >
      <span className="text-xs font-mono uppercase tracking-widest text-accent-light">{eyebrow}</span>
      <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 tracking-tight">{title}</h2>
      {description && <p className="text-ink-muted text-lg">{description}</p>}
    </motion.div>
  );
}
