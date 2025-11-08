import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="cta" className="relative w-full bg-black py-24 text-center">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(600px_300px_at_50%_20%,rgba(59,130,246,0.25),transparent)]" />
      <div className="relative mx-auto max-w-3xl px-6">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white sm:text-4xl"
          style={{ textShadow: '0 0 20px rgba(59,130,246,0.35)' }}
        >
          Join the Sky Revolution
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-3 max-w-xl text-cyan-100"
        >
          Early access, pilots, and partnership inquiries are now open for 2025 rollouts.
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <input
            type="email"
            required
            placeholder="you@company.com"
            className="w-full max-w-md rounded-full border border-cyan-400/30 bg-black/60 px-5 py-3 text-sm text-cyan-100 placeholder-cyan-300/50 outline-none transition focus:border-cyan-400/70"
          />
          <button
            type="submit"
            className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_35px_rgba(6,182,212,0.6)] transition hover:bg-cyan-400"
          >
            Request Access
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default CTA;
