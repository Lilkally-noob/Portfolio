import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,#1d232d_0%,#0b0e13_65%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 px-6 pt-24 md:grid-cols-2">
        <div>
          <motion.p
            variants={fade}
            custom={0}
            initial="hidden"
            animate="show"
            className="mb-4 text-[11px] uppercase tracking-[0.3em] text-white/50"
          >
            Digital experiences that hit
          </motion.p>

          <motion.h1
            variants={fade}
            custom={1}
            initial="hidden"
            animate="show"
            className="silver-text font-display text-[22vw] leading-[0.9] md:text-[9rem]"
          >
            FRONTEND
            <br />
            DEVELOPER
          </motion.h1>

          <motion.p
            variants={fade}
            custom={2}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-md text-white/70"
          >
            I build fast, clean websites for local businesses and bold brands,
            and I run the platform behind 4D Mav's Nation.
          </motion.p>

          <motion.div
            variants={fade}
            custom={3}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap items-center gap-6"
          >
            <a
              href="#work"
              className="rounded-md bg-gradient-to-b from-zinc-100 to-zinc-400 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-black transition hover:opacity-90"
            >
              View my work
            </a>
            <a
              href="/resume.pdf"
              className="text-xs uppercase tracking-widest text-white/60 transition hover:text-white"
            >
              Download resume ↓
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative hidden h-[80vh] md:block"
        >
          <img
            src="/me.png"
            alt="Lilkally"
            className="h-full w-full object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_75%,transparent)]"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-6 text-right md:right-12">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
          Available for
        </p>
        <p className="font-display text-3xl text-white/80">FREELANCE</p>
      </div>
    </section>
  );
}
