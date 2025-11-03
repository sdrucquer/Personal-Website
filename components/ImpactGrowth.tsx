"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/motion";

const revenuePoints = [
  { year: "2021", value: 15 },
  { year: "2022", value: 68 },
  { year: "2023", value: 150 }
];

const teamNodes = [
  { id: 1, x: 10, y: 20 },
  { id: 2, x: 30, y: 45 },
  { id: 3, x: 55, y: 30 },
  { id: 4, x: 75, y: 55 },
  { id: 5, x: 50, y: 70 },
  { id: 6, x: 20, y: 65 },
  { id: 7, x: 80, y: 25 }
];

export function ImpactGrowth() {
  return (
    <section className="section-wrapper">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-10 lg:grid-cols-2"
      >
        <div className="glass-panel relative overflow-hidden px-6 py-8">
          <motion.h3 variants={fadeInUp} className="font-sora text-2xl text-white">
            Impact & Growth
          </motion.h3>
          <motion.p variants={fadeInUp} className="mt-2 text-softGray/70">
            Visualizing momentum across revenue and team expansion.
          </motion.p>
          <motion.svg
            variants={fadeInUp}
            viewBox="0 0 320 180"
            className="mt-6 w-full"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          >
            <defs>
              <linearGradient id="revGradient" x1="0" y1="180" x2="320" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0FA958" stopOpacity="0.2" />
                <stop offset="1" stopColor="#0FA958" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <polyline
              points={revenuePoints.map((point, index) => `${(index / (revenuePoints.length - 1)) * 320},${180 - (point.value / 150) * 160}`).join(" ")}
              fill="none"
              stroke="url(#revGradient)"
              strokeWidth={6}
              strokeLinecap="round"
            />
            {revenuePoints.map((point, index) => (
              <g key={point.year}>
                <circle
                  cx={(index / (revenuePoints.length - 1)) * 320}
                  cy={180 - (point.value / 150) * 160}
                  r={8}
                  fill="#0FA958"
                  className="drop-shadow-[0_0_12px_rgba(15,169,88,0.6)]"
                />
                <text
                  x={(index / (revenuePoints.length - 1)) * 320}
                  y={180 - (point.value / 150) * 160 - 14}
                  textAnchor="middle"
                  className="fill-white text-sm"
                >
                  ${point.value}K
                </text>
                <text x={(index / (revenuePoints.length - 1)) * 320} y={170} textAnchor="middle" className="fill-softGray text-xs">
                  {point.year}
                </text>
              </g>
            ))}
          </motion.svg>
        </div>

        <motion.div variants={fadeInUp} className="glass-panel relative overflow-hidden px-6 py-8">
          <h3 className="font-sora text-2xl text-white">Crew Connectivity</h3>
          <p className="mt-2 text-softGray/70">
            Distributed leadership pods connected by shared mission and rituals.
          </p>
          <div className="mt-8 h-64 w-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              {teamNodes.map((node) => (
                <circle key={node.id} cx={node.x} cy={node.y} r={4} fill="#0FA958" />
              ))}
              {teamNodes.map((source) =>
                teamNodes.map((target) => (
                  source.id !== target.id ? (
                    <line
                      key={`${source.id}-${target.id}`}
                      x1={source.x}
                      y1={source.y}
                      x2={target.x}
                      y2={target.y}
                      stroke="rgba(15,169,88,0.15)"
                      strokeWidth={0.5}
                    />
                  ) : null
                ))
              )}
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
