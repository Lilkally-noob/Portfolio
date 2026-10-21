import { motion } from 'framer-motion'

type Fact = {
  label: string
  value: string
}

const facts: Fact[] = [
  { label: 'Based in', value: 'Lagos, Nigeria' },
  { label: 'Studying', value: 'Information Systems, UNIOSUN' },
  { label: 'Focus', value: 'Frontend development' },
  { label: 'Also running', value: "4D Mav's Nation" },
  { label: 'Availability', value: 'Open to freelance projects' },
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-xs uppercase tracking-[0.3em] text-white/60">About me</h2>
          <p className="silver-text font-display text-4xl leading-tight md:text-5xl">
            I build websites that look sharp and load fast.
          </p>
          <div className="mt-8 space-y-5 leading-relaxed text-white/60">
            <p>
              I'm Habeeb, a frontend developer and Information Systems student at Osun State University,
              based in Lagos. I build websites for local businesses and my own projects, using React,
              TypeScript and Tailwind.
            </p>
            <p>
              Outside client work, I run 4D Mav's Nation, a music hub that gives an underground hip-hop
              collective one place to promote and share their releases. I also build things to learn,
              like a 3D browser game in Three.js and a mobile marketplace app in React Native.
            </p>
            <p>
              I care about clean code, smooth interactions and sites that work properly on a phone,
              because that's where most people will see them.
            </p>
          </div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="self-start rounded-2xl border border-line bg-panel/70 p-7"
        >
          {facts.map((f, i) => (
            <div
              key={f.label}
              className={`flex items-baseline justify-between gap-6 py-4 ${i !== 0 ? 'border-t border-line' : ''}`}
            >
              <dt className="text-[11px] uppercase tracking-[0.25em] text-white/40">{f.label}</dt>
              <dd className="text-right text-sm text-white/80">{f.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}