"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/motion";

type JourneyEvent = {
  title: string;
  timeframe: string;
  description: string;
  icon: string;
};

const timeline: JourneyEvent[] = [
  {
    title: "Founder, Iconic Cleanup",
    timeframe: "2021 — Present",
    description: "Scaled revenue from $15K → $150K in 24 months while growing a 25+ person eco-operations crew.",
    icon: "🌱"
  },
  {
    title: "Mechanical Engineering @ Penn State",
    timeframe: "2019 — 2023",
    description: "Earned B.S. with Entrepreneurship minor; explored sustainable manufacturing systems.",
    icon: "🎓"
  },
  {
    title: "ASME Battle Bot Design Lead",
    timeframe: "2022",
    description: "Orchestrated CAD, FEA, and prototyping teams for a modular combat robot that placed in top 3 nationally.",
    icon: "🤖"
  },
  {
    title: "Nittany AI Alliance",
    timeframe: "2021 — 2022",
    description: "Programmed workshops and pitch nights helping 120+ students launch AI-first experiments.",
    icon: "🧠"
  }
];

export function JourneyTimeline() {
  return (
    <section className="section-wrapper">
      <div className="glass-panel relative overflow-hidden px-6 py-16 sm:px-10">
        <div className="timeline-line" aria-hidden />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2 variants={fadeInUp} className="font-sora text-3xl text-white sm:text-4xl">
            My Journey
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-2 max-w-2xl text-softGray/70">
            A scrollable highlight reel threading together engineering, entrepreneurship, and community building.
          </motion.p>
          <div className="mt-12 space-y-12">
            {timeline.map((item, index) => (
              <motion.article
                key={item.title}
                variants={fadeInUp}
                custom={index}
                className="relative pl-16 md:flex md:items-start md:gap-12 md:pl-0"
              >
                <div className="absolute left-4 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-forest/20 text-2xl text-forest shadow-[0_0_20px_rgba(15,169,88,0.4)] md:left-1/2 md:-translate-x-1/2">
                  {item.icon}
                </div>
                <div className="md:ml-[55%]">
                  <h3 className="font-sora text-2xl text-white">{item.title}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-forest/80">{item.timeframe}</p>
                  <p className="mt-3 max-w-xl text-softGray/70">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
