"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { fadeInUp, staggerContainer, glowIn } from "@/utils/motion";

export function ProjectsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-wrapper" id="projects">
      <motion.div
        className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div>
          <motion.h2 variants={fadeInUp} className="font-sora text-3xl text-white sm:text-4xl">
            Projects
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-3 max-w-xl text-softGray/70">
            Hover or tap to expand the experiments that merge mechanical ingenuity with automation-first operations.
          </motion.p>
          <div className="mt-10 space-y-4">
            {projects.map((project, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.button
                  key={project.title}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  variants={fadeInUp}
                  custom={index}
                  className={`w-full rounded-2xl border px-6 py-5 text-left transition-all ${
                    isActive
                      ? "border-forest/80 bg-forest/20 text-white shadow-[0_0_35px_rgba(15,169,88,0.35)]"
                      : "border-white/10 bg-white/5 text-softGray/80 hover:border-forest/60 hover:bg-forest/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-sora text-xl">{project.title}</h3>
                    <span className="text-xs uppercase tracking-[0.3em] text-forest/70">{project.metrics}</span>
                  </div>
                  <p className="mt-2 text-sm text-softGray/70">{project.subtitle}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag bg-white/10 text-softGray/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[activeIndex].title}
              variants={glowIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="glass-panel grid h-full min-h-[360px] place-items-center overflow-hidden px-8 py-10 text-center"
            >
              <div className="space-y-5">
                <motion.h3 layout className="font-sora text-2xl text-white">
                  {projects[activeIndex].title}
                </motion.h3>
                <p className="text-softGray/70">{projects[activeIndex].description}</p>
                <p className="text-sm uppercase tracking-[0.2em] text-forest/70">{projects[activeIndex].metrics}</p>
                {projects[activeIndex].cta && (
                  <a
                    href={projects[activeIndex].cta}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-forest/70 px-5 py-2 text-sm text-forest transition hover:shadow-[0_0_25px_rgba(15,169,88,0.4)]"
                  >
                    Explore
                    <span aria-hidden>↗</span>
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-forest/30 via-transparent to-transparent blur-3xl" />
        </div>
      </motion.div>
    </section>
  );
}
