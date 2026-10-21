const socials = [
  { name: "GitHub", href: "https://github.com/Lilkally-noob" },
  { name: "Instagram", href: "lilkally__05" },
  { name: "X", href: "Habeeb_Lilkally" },
];

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 pb-10 pt-6">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-[11px] uppercase tracking-widest text-white/40 md:flex-row">
        <p>© {new Date().getFullYear()} Lilkally. All rights reserved.</p>
        <ul className="flex gap-6">
          {socials.map((s) => (
            <li key={s.name}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
