import { motion } from "framer-motion";

const stats = [
  { value: "2+", label: "Sites shipped" },
  { value: "5+", label: "Local clients" },
  { value: "3+", label: "Years learning" },
  { value: "10+", label: "Releases hosted" },
];

export default function Stats() {
  return (
    <section className="relative z-10 mx-auto -mt-16 max-w-7xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-2 rounded-2xl border border-line bg-panel/70 py-8 backdrop-blur md:grid-cols-4"
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`px-4 py-4 text-center ${i !== 0 ? "md:border-l md:border-line" : ""}`}
          >
            <p className="silver-text font-display text-5xl">{s.value}</p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-white/50">
              {s.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
