"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/motion";

export function InfluenceSection() {
  return (
    <section className="section-wrapper">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="glass-panel overflow-hidden px-6 py-12 sm:px-10"
      >
        <motion.h3 variants={fadeInUp} className="font-sora text-3xl text-white sm:text-4xl">
          Content & Influence
        </motion.h3>
        <motion.p variants={fadeInUp} className="mt-2 max-w-2xl text-softGray/70">
          Sharing learnings from building sustainable ventures and playful robotics.
        </motion.p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {[{ label: "LinkedIn Impressions", value: "100K+" }, { label: "Connections", value: "2K+" }].map((item, index) => (
            <motion.div
              key={item.label}
              variants={fadeInUp}
              custom={index}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-forest/20 via-transparent to-white/10 px-6 py-8"
            >
              <motion.span
                className="text-4xl font-semibold text-white"
                animate={{
                  backgroundPositionX: ["0%", "100%"],
                  backgroundPositionY: ["0%", "100%"]
                }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 4 + index }}
                style={{
                  backgroundImage: "linear-gradient(120deg, #0FA958, #FFFFFF)",
                  WebkitBackgroundClip: "text",
                  color: "transparent"
                }}
              >
                {item.value}
              </motion.span>
              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-softGray/70">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
