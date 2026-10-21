import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid items-center gap-10 overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-zinc-500/40 via-panel to-panel p-8 md:grid-cols-[1.2fr_1fr_1fr] md:p-12"
      >
        <h2 className="silver-text font-display text-5xl leading-[0.95] md:text-6xl">
          LET'S CREATE
          <br />
          SOMETHING
          <br />
          EXTRAORDINARY
        </h2>

        <div>
          <p className="text-white/60">
            I'm open to freelance projects and collaborations. Got a business
            that needs a site, or an idea that needs building? Hit me up.
          </p>
          <a
            href="mailto:lilkallydev@gmail.com"
            className="mt-6 inline-block rounded-md bg-gradient-to-b from-zinc-100 to-zinc-400 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-black transition hover:opacity-90"
          >
            Let's work together
          </a>
        </div>

        <ul className="space-y-4 text-sm text-white/70 md:border-l md:border-line md:pl-10">
          <li className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-white/40" />
            lilkallydev@gmail.com
          </li>
          <li className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-white/40" />
            Lagos, Nigeria
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
