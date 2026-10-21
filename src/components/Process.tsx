import { motion } from "framer-motion";
import { Search, Target, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    text: "Understanding your goals, users and the problem to solve.",
  },
  {
    icon: Target,
    title: "Define",
    text: "Locking down scope, structure and what the site needs to do.",
  },
  {
    icon: PenTool,
    title: "Design",
    text: "Shaping the look and feel before a line of code is written.",
  },
  {
    icon: Code,
    title: "Develop",
    text: "Building it clean, responsive and fast.",
  },
  {
    icon: Rocket,
    title: "Deliver",
    text: "Testing, launching and handing over something that works.",
  },
];

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-8 text-xs uppercase tracking-[0.3em] text-white/60">
        My process
      </h2>
      <div className="grid rounded-2xl border border-line bg-panel/70 md:grid-cols-5">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`p-6 ${i !== 0 ? "border-t border-line md:border-l md:border-t-0" : ""}`}
          >
            <p className="text-[11px] tracking-[0.25em] text-white/30">
              0{i + 1}
            </p>
            <h3 className="mt-2 text-sm font-semibold uppercase tracking-wider">
              {s.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/50">
              {s.text}
            </p>
            <s.icon className="mt-6 h-7 w-7 text-white/40" strokeWidth={1.25} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
