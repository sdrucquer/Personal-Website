"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/motion";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="glass-panel grid gap-6 px-6 py-10 sm:px-10"
    >
      <motion.h2 variants={fadeInUp} className="font-sora text-3xl text-white">
        Drop a note
      </motion.h2>
      <motion.p variants={fadeInUp} className="text-softGray/70">
        I read every message. Share your project or idea and I&apos;ll reach out with next steps within 48 hours.
      </motion.p>
      <motion.label variants={fadeInUp} className="flex flex-col gap-2 text-sm">
        Name
        <input
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-softGray/90 placeholder-softGray/40 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/50"
          type="text"
          required
          placeholder="Your name"
        />
      </motion.label>
      <motion.label variants={fadeInUp} className="flex flex-col gap-2 text-sm">
        Email
        <input
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-softGray/90 placeholder-softGray/40 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/50"
          type="email"
          required
          placeholder="you@email.com"
        />
      </motion.label>
      <motion.label variants={fadeInUp} className="flex flex-col gap-2 text-sm">
        How can I help?
        <textarea
          className="h-32 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-softGray/90 placeholder-softGray/40 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/50"
          required
          placeholder="Tell me about the collaboration you have in mind"
        />
      </motion.label>
      <motion.button
        variants={fadeInUp}
        type="submit"
        className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-forest/70 bg-forest/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-softGray/90 transition hover:shadow-[0_0_25px_rgba(15,169,88,0.4)]"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        {submitted ? "Sent!" : "Send Message"}
      </motion.button>
    </motion.form>
  );
}
