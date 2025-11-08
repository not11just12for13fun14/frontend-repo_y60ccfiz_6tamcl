import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Glow overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(600px_300px_at_20%_20%,rgba(59,130,246,0.35),transparent)]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(500px_250px_at_80%_40%,rgba(56,189,248,0.25),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.2)] backdrop-blur"
        >
          Aircel x Starlink 2025 — The Comeback From Space
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl"
          style={{ textShadow: '0 0 24px rgba(56,189,248,0.35)' }}
        >
          Aircel is Back. This Time, We’re Going to Space.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-5 max-w-2xl text-sm text-cyan-100/90 sm:text-base"
        >
          A bold partnership to connect every corner of India with low-latency satellite internet and a new era of digital access.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#learn-more"
            className="group rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-100 shadow-[0_0_25px_rgba(34,211,238,0.25)] transition hover:border-cyan-400/60 hover:bg-cyan-400/20"
          >
            Learn more
          </a>
          <a
            href="#cta"
            className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_35px_rgba(6,182,212,0.6)] transition hover:bg-cyan-400"
          >
            Join the Sky Revolution
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
