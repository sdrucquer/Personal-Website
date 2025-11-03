"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/motion";

const skills = [
  {
    title: "Python + AI Ops",
    blurb: "Automations saved 5+ hrs/week coordinating crews",
    icon: "🐍"
  },
  {
    title: "Mechanical Design",
    blurb: "SolidWorks, GD&T, and rapid prototyping lab leadership",
    icon: "🛠️"
  },
  {
    title: "Systems Leadership",
    blurb: "Scaled teams, hiring pipelines, and safety training",
    icon: "🧭"
  },
  {
    title: "Entrepreneurship",
    blurb: "Bootstrapped operations and investor storytelling",
    icon: "🚀"
  }
];

export function SkillsDashboard() {
  return (
    <section className="section-wrapper">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 variants={fadeInUp} className="font-sora text-3xl text-white sm:text-4xl">
          AI + Engineering Skills
        </motion.h2>
        <motion.p variants={fadeInUp} className="mt-3 max-w-2xl text-softGray/70">
          A balanced toolkit that fuses human-centered leadership with technical execution.
        </motion.p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              variants={fadeInUp}
              custom={index}
              className="group glass-panel relative overflow-hidden px-6 py-8"
            >
              <div className="absolute right-0 top-0 h-24 w-24 -translate-y-1/2 translate-x-1/2 rounded-full bg-forest/30 blur-3xl transition duration-500 group-hover:scale-125" />
              <div className="flex items-center gap-4">
                <span className="text-3xl">{skill.icon}</span>
                <h3 className="font-sora text-xl text-white">{skill.title}</h3>
              </div>
              <p className="mt-4 text-softGray/70">{skill.blurb}</p>
              <motion.span
                className="mt-6 inline-flex items-center gap-2 text-sm text-forest"
                animate={{ x: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 2 + index * 0.3, ease: "easeInOut" }}
              >
                Hover for spark ✨
              </motion.span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
