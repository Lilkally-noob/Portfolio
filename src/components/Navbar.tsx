const links = ["Work", "Capabilities", "About", "Contact"];

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="font-display text-2xl tracking-wide">
          LK
        </a>
        <ul className="hidden gap-8 text-xs uppercase tracking-widest text-white/70 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="transition hover:text-white"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-gradient-to-b from-white to-zinc-400 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-black transition hover:opacity-90"
        >
          Let's talk
        </a>
      </nav>
    </header>
  );
}
