import { useRef, useState } from "react";
import { motion } from "framer-motion";

const nodes = [
  { id: "ai", label: "AI", x: 50, y: 8 },
  { id: "llms", label: "LLMs", x: 82, y: 22 },
  { id: "rag", label: "RAG", x: 90, y: 52 },
  { id: "arch", label: "Software\nArchitecture", x: 72, y: 80 },
  { id: "micro", label: "Microservices", x: 40, y: 92 },
  { id: "data", label: "Data", x: 10, y: 75 },
  { id: "dss", label: "Decision\nSupport", x: 4, y: 42 },
  { id: "pm", label: "Process\nMining", x: 18, y: 12 },
  { id: "bpm", label: "BPM", x: 45, y: 45 },
];

const edges: [string, string][] = [
  ["ai", "llms"], ["llms", "rag"], ["rag", "arch"], ["arch", "micro"],
  ["micro", "data"], ["data", "dss"], ["dss", "pm"], ["pm", "ai"],
  ["bpm", "ai"], ["bpm", "dss"], ["bpm", "micro"], ["rag", "bpm"],
];

export default function TechConstellation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50, active: false });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  };

  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouse((m) => ({ ...m, active: false }))}
      className="relative w-full aspect-square max-w-md mx-auto select-none"
    >
      <div className="absolute inset-0 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible">
        {edges.map(([a, b], i) => {
          const na = nodeMap[a];
          const nb = nodeMap[b];
          return (
            <motion.line
              key={i}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke="url(#edgeGradient)"
              strokeWidth="0.3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 1.2, delay: i * 0.06, ease: "easeInOut" }}
            />
          );
        })}
        <defs>
          <linearGradient id="edgeGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#818CF8" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
        </defs>
      </svg>

      {nodes.map((n, i) => {
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = mouse.active ? Math.max(0, 1 - dist / 28) : 0;
        const offsetX = mouse.active ? -dx * influence * 0.15 : 0;
        const offsetY = mouse.active ? -dy * influence * 0.15 : 0;

        return (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: `${offsetX}%`,
              y: `${offsetY}%`,
            }}
            transition={{
              opacity: { duration: 0.5, delay: 0.3 + i * 0.05 },
              scale: { duration: 0.5, delay: 0.3 + i * 0.05 },
              x: { type: "spring", stiffness: 120, damping: 12 },
              y: { type: "spring", stiffness: 120, damping: 12 },
            }}
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
          >
            <div
              className={`px-2.5 py-1.5 rounded-lg text-[10px] md:text-xs font-medium text-center whitespace-pre-line leading-tight glass shadow-glow transition-colors duration-300 ${
                influence > 0.3 ? "border-accent-light/70 text-ink" : "text-ink-muted"
              }`}
            >
              {n.label}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
