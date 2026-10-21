type SocialLink = {
  name: string
  href: string
}

const socials: SocialLink[] = [
  { name: 'GitHub', href: 'https://github.com/Lilkally-noob' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/Afolabi-habeeb' },
  { name: 'Instagram', href: 'https://instagram.com/Lilkally__05' },
  { name: 'X', href: 'https://x.com/Habeeb_lilkally' },
]

const quickLinks = ['Work', 'Capabilities', 'About', 'Contact']

const email = 'lilkallydev@gmail.com'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="font-display text-3xl tracking-wide">LK</a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Frontend developer building fast, clean websites for local businesses and bold brands.
            </p>
            <p className="mt-5 flex items-center gap-2 text-xs uppercase tracking-widest text-white/60">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for freelance
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-white/40">Navigate</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="transition hover:text-white">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-white/40">Connect</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {socials.map((s) => (
                <li key={s.name}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="transition hover:text-white">
                    {s.name} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-white/40">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <a href={`mailto:${email}`} className="transition hover:text-white">{email}</a>
              </li>
              <li>Lagos, Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-[11px] uppercase tracking-widest text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} Lilkally. All rights reserved.</p>
          <p>Built with React, TypeScript & Tailwind</p>
          <a href="#" className="transition hover:text-white">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}