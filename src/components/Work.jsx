import { motion } from "framer-motion";

const projects = [
  {
    title: "4D Mav's Nation",
    tags: "Music hub · Web platform",
    href: "#",
    bg: "from-zinc-800 via-zinc-900 to-black",
  },
  {
    title: "Collector Game",
    tags: "3D web game · Three.js",
    href: "#",
    bg: "from-neutral-700 via-neutral-900 to-black",
  },
];

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-xs uppercase tracking-[0.3em] text-white/60">
          Featured work
        </h2>
        <a
          href="#"
          className="text-xs uppercase tracking-widest text-white/50 transition hover:text-white"
        >
          Explore all projects →
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.href}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ y: -6 }}
            className={`group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl border border-line bg-gradient-to-br ${p.bg} p-7`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_60%)]" />
            <div className="relative">
              <h3 className="font-display text-4xl leading-none">{p.title}</h3>
              <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-white/50">
                {p.tags}
              </p>
            </div>
            <span className="absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-lg transition group-hover:bg-white group-hover:text-black">
              ↗
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
