import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const links = ['Work', 'About', 'Capabilities', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-ink/70 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-2xl tracking-wide">LK</a>

        <ul className="hidden gap-8 text-xs uppercase tracking-widest text-white/70 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="transition hover:text-white">{l}</a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-gradient-to-b from-white to-zinc-400 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-black transition hover:opacity-90 md:block"
        >
          Let's talk
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-px w-6 bg-white transition ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`h-px w-6 bg-white transition ${open ? 'opacity-0' : ''}`} />
          <span className={`h-px w-6 bg-white transition ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line/60 px-6 md:hidden"
          >
            {links.map((l) => (
              <li key={l} className="border-b border-line/40">
                <a
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-sm uppercase tracking-widest text-white/80"
                >
                  {l}
                </a>
              </li>
            ))}
            <li className="py-5">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-gradient-to-b from-white to-zinc-400 py-3 text-center text-xs font-semibold uppercase tracking-widest text-black"
              >
                Let's talk
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}