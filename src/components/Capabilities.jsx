import { motion } from "framer-motion";
import {
  Monitor,
  PenTool,
  Smartphone,
  Database,
  Layers,
  Zap,
} from "lucide-react";

const capabilities = [
  {
    icon: Monitor,
    title: "Frontend Development",
    text: "Fast, responsive websites built clean from scratch.",
  },
  {
    icon: PenTool,
    title: "Figma to Code",
    text: "Pixel-accurate builds from your designs, no guesswork.",
  },
  {
    icon: Layers,
    title: "Web Apps",
    text: "Interactive React apps with real state and real data.",
  },
  {
    icon: Database,
    title: "Backend Integration",
    text: "Auth, databases and real-time features with Supabase.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    text: "Cross-platform apps with React Native and Expo.",
  },
  {
    icon: Zap,
    title: "Performance",
    text: "Lightweight pages that load quick, even on slow networks.",
  },
];

const tools = [
  "HTML5",
  "Tailwind",
  "JavaScript",
  "React",
  "Vite",
  "Supabase",
  "Figma",
  "Git",
  "Vercel",
  "Expo",
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="mb-8 text-xs uppercase tracking-[0.3em] text-white/60">
            Core capabilities
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4"
              >
                <c.icon
                  className="mt-1 h-7 w-7 shrink-0 text-white/70"
                  strokeWidth={1.25}
                />
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {c.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-line bg-panel/70 p-7"
        >
          <h2 className="mb-6 text-xs uppercase tracking-[0.3em] text-white/60">
            Tools & technologies
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {tools.map((t) => (
              <div
                key={t}
                className="rounded-lg border border-line bg-ink/60 px-3 py-3 text-center text-xs uppercase tracking-widest text-white/70 transition hover:border-white/40 hover:text-white"
              >
                {t}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
