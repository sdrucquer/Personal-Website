"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "@/utils/motion";

const leafParticles = Array.from({ length: 18 }).map((_, index) => index);

export function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section ref={targetRef} className="relative overflow-hidden">
      <div className="absolute inset-0 grid place-items-center bg-circuit-grid opacity-40" aria-hidden />
      <motion.div
        style={{ y: translateY }}
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6, transition: { duration: 1.4, ease: "easeOut" } }}
      >
        <svg className="h-full w-full" viewBox="0 0 1200 800" fill="none">
          <defs>
            <linearGradient id="glow" x1="0" y1="0" x2="1200" y2="800" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0FA958" stopOpacity="0.8" />
              <stop offset="1" stopColor="#0B2545" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path d="M0 400 L1200 400" stroke="url(#glow)" strokeWidth="1" strokeDasharray="12 12" opacity="0.4" />
          <path d="M0 200 L1200 600" stroke="url(#glow)" strokeWidth="1" opacity="0.25" />
          <path d="M0 600 L1200 200" stroke="url(#glow)" strokeWidth="1" opacity="0.25" />
        </svg>
      </motion.div>

      <div className="section-wrapper relative flex min-h-[100vh] flex-col items-start justify-center gap-12 text-left">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-4xl space-y-6"
        >
          <motion.span variants={fadeInUp} className="tag bg-forest/20 text-forest">
            👋 Hey, I&apos;m Alex Rivera
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="font-sora text-4xl leading-tight text-white drop-shadow-xl sm:text-5xl lg:text-6xl"
          >
            Engineer. Entrepreneur. Storyteller.
          </motion.h1>
          <motion.p variants={fadeInUp} className="max-w-2xl text-lg text-softGray/80 sm:text-xl">
            Blending mechanical design, AI experimentation, and sustainable ventures to build systems that scale both
            people and the planet.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center gap-4 text-sm text-softGray/60 sm:text-base"
          >
            <span>Founder @ Iconic Cleanup</span>
            <span className="hidden sm:inline">•</span>
            <span>Mechanical Engineer, Penn State</span>
            <span className="hidden sm:inline">•</span>
            <span>Designing AI-powered ops</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.8, ease: "easeOut" } }}
        >
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-softGray/70">
            <span className="h-2 w-2 rounded-full bg-forest shadow-[0_0_15px_#0FA958]" />
            Scroll to begin
            <motion.span
              aria-hidden
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            >
              ↓
            </motion.span>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        {leafParticles.map((particle) => (
          <motion.span
            key={particle}
            className="absolute h-3 w-3 rounded-full bg-forest/40 blur-[1px]"
            style={{
              top: `${(particle * 37) % 100}%`,
              left: `${(particle * 53) % 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, (particle % 2 === 0 ? 10 : -10), 0],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              repeat: Infinity,
              duration: 5 + (particle % 5),
              delay: particle * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </section>
  );
}
