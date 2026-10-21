import { motion } from 'framer-motion'
import collector from '../assets/collector.png'
import mavs from '../assets/mavs-nation.png'

type Project = {
  title: string
  description: string
  tags: string[]
  image: string
  url: string
  live: string
  repo?: string
}

const projects: Project[] = [
  {
    title: 'Collector',
    description:
      'A 3D browser game with two modes: timed Training rounds and a non-stop Endless Dash. Built from scratch with Three.js, with touch controls for mobile.',
    tags: ['Three.js', 'Vite', 'JavaScript'],
    image: collector,
    url: '3d-collector-game.vercel.app',
    live: 'https://3d-collector-game.vercel.app',
    repo: 'https://github.com/Lilkally-noob/3d-collector-game',
  },
  {
    title: "4D Mav's Nation",
    description:
      'A music hub for an underground hip-hop collective. Browse the latest releases, search tracks, and jump straight to each one on its streaming platform.',
    tags: ['Streaming hub', 'Search', 'Dark mode'],
    image: mavs,
    url: '4d-mavnationstreamer.netlify.app',
    live: 'https://4d-mavnationstreamer.netlify.app',
  },
]

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-xs uppercase tracking-[0.3em] text-white/60">Featured work</h2>
        <a
          href="https://github.com/Lilkally-noob"
          target="_blank"
          rel="noreferrer"
          className="text-xs uppercase tracking-widest text-white/50 transition hover:text-white"
        >
          More on GitHub ↗
        </a>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="group overflow-hidden rounded-2xl border border-line bg-panel/70"
          >
            <div className="flex items-center gap-3 border-b border-line bg-ink/60 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>
              <div className="flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-center text-[11px] text-white/40">
                {p.url}
              </div>
            </div>

            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className="block aspect-[16/10] overflow-hidden"
            >
              <img
                src={p.image}
                alt={`${p.title} preview`}
                className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
              />
            </a>

            <div className="p-7">
              <h3 className="font-display text-4xl leading-none">{p.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/60">{p.description}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-line px-3 py-1 text-[11px] uppercase tracking-widest text-white/60"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-6 text-xs font-semibold uppercase tracking-widest">
                <a href={p.live} target="_blank" rel="noreferrer" className="transition hover:text-white/70">
                  Live site ↗
                </a>
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer" className="text-white/60 transition hover:text-white">
                    Code ↗
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}