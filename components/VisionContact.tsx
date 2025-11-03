"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/motion";

const actions = [
  { label: "Resume PDF", href: "/AlexRivera_Resume.pdf" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/iconiccleanup" },
  { label: "Iconic.land", href: "https://iconic.land" },
  { label: "Contact Me", href: "/contact" }
];

export function VisionContact() {
  return (
    <section className="section-wrapper">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-forest/25 via-navy to-navy/80 px-6 py-16 text-center sm:px-12"
      >
        <motion.h2 variants={fadeInUp} className="font-sora text-3xl text-white sm:text-4xl">
          Merging Engineering, AI, and Entrepreneurship to push humanity forward.
        </motion.h2>
        <motion.p variants={fadeInUp} className="mx-auto mt-4 max-w-2xl text-softGray/75">
          From grassroots cleanups to AI copilots, I build systems that honor people, planet, and possibility.
        </motion.p>
        <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap justify-center gap-4">
          {actions.map((action, index) => (
            <motion.a
              key={action.label}
              variants={fadeInUp}
              custom={index}
              href={action.href}
              className="group relative overflow-hidden rounded-full border border-forest/70 bg-white/10 px-6 py-3 text-sm font-medium uppercase tracking-[0.3em] text-softGray/90 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                {action.label}
                <span aria-hidden className="transition group-hover:translate-x-1">
                  ↗
                </span>
              </span>
              <span className="absolute inset-0 -z-10 bg-forest/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
