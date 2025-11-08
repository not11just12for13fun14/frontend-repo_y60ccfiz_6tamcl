import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, children }) => (
  <section id={id} className="relative mx-auto max-w-6xl px-6 py-20 text-cyan-100">
    <motion.h2
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mb-6 text-2xl font-bold tracking-tight text-white sm:text-3xl"
      style={{ textShadow: '0 0 18px rgba(34,211,238,0.35)' }}
    >
      {title}
    </motion.h2>
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.05 }}
      className="text-cyan-100/90"
    >
      {children}
    </motion.div>
  </section>
);

export const Sections = () => {
  return (
    <div id="learn-more" className="relative w-full bg-black">
      {/* Problem */}
      <Section id="problem" title="The Problem: 600M Unconnected Indians">
        <div className="grid gap-6 md:grid-cols-2">
          <p className="leading-relaxed">
            Nearly 600 million people in India still lack reliable internet access. Terrain, infrastructure gaps, and high deployment costs keep entire regions offline—limiting access to education, healthcare, and commerce.
          </p>
          <div className="rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/5 to-transparent p-4 text-sm">
            • 65% rural population underserved
            <br />• Fiber rollout is slow and capital intensive
            <br />• Traditional towers struggle in remote terrain
          </div>
        </div>
      </Section>

      {/* Solution */}
      <Section id="solution" title="The Solution: Aircel + Starlink Partnership">
        <div className="grid gap-6 md:grid-cols-2">
          <p className="leading-relaxed">
            Aircel returns with a bold partnership: Starlink’s LEO satellite constellation integrated with Aircel’s ground operations, distribution, and on-ground service. High-speed, low-latency internet—anywhere.
          </p>
          <div className="rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/5 to-transparent p-4 text-sm">
            • Sub-50ms latency with LEO satellites
            <br />• Nationwide support and service delivery
            <br />• Seamless onboarding for homes and businesses
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section id="how" title="How It Works: Satellite → Gateway → Dish → Internet">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-cyan-400/20 bg-black/40 p-5">
            <h3 className="mb-2 text-lg font-semibold text-white">1. Satellite</h3>
            <p className="text-sm text-cyan-100/90">LEO satellites blanket the sky, routing data across the constellation for minimal latency.</p>
          </div>
          <div className="rounded-xl border border-cyan-400/20 bg-black/40 p-5">
            <h3 className="mb-2 text-lg font-semibold text-white">2. Gateway</h3>
            <p className="text-sm text-cyan-100/90">Ground stations connect space to terrestrial backbones through high-throughput gateways.</p>
          </div>
          <div className="rounded-xl border border-cyan-400/20 bg-black/40 p-5">
            <h3 className="mb-2 text-lg font-semibold text-white">3. Dish</h3>
            <p className="text-sm text-cyan-100/90">User terminals auto-orient to satellites, delivering a fast, stable connection to your devices.</p>
          </div>
        </div>
      </Section>

      {/* Who we serve */}
      <Section id="serve" title="Who We Serve">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-cyan-400/20 bg-black/40 p-5">
            <h3 className="mb-2 text-lg font-semibold text-white">Rural & Remote Users</h3>
            <p className="text-sm">Affordable connectivity for villages, farms, schools, and clinics—no towers required.</p>
          </div>
          <div className="rounded-xl border border-cyan-400/20 bg-black/40 p-5">
            <h3 className="mb-2 text-lg font-semibold text-white">Businesses & Enterprises</h3>
            <p className="text-sm">Backup links, last-mile connectivity, and branch networking across India.</p>
          </div>
        </div>
      </Section>

      {/* Business plan */}
      <Section id="plan" title="Business Plan: 2025–2030 Growth">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-transparent p-5">
            <h4 className="mb-1 font-semibold">2025–2026</h4>
            <p className="text-sm">Pilot regions, regulatory alignment, and distribution ramp-up.</p>
          </div>
          <div className="rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-transparent p-5">
            <h4 className="mb-1 font-semibold">2027–2028</h4>
            <p className="text-sm">Nationwide expansion, enterprise SLAs, and localized manufacturing.</p>
          </div>
          <div className="rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-transparent p-5">
            <h4 className="mb-1 font-semibold">2029–2030</h4>
            <p className="text-sm">Profitable scale with hybrid satellite–fiber backbone and 5G FWA overlays.</p>
          </div>
        </div>
      </Section>

      {/* Why we win */}
      <Section id="why" title="Why We Win: Head-to-Head vs Jio & Airtel">
        <div className="overflow-x-auto rounded-xl border border-cyan-400/20 bg-black/40">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead className="bg-white/5 text-cyan-200">
              <tr>
                <th className="px-4 py-3">Criteria</th>
                <th className="px-4 py-3">Aircel x Starlink</th>
                <th className="px-4 py-3">Jio</th>
                <th className="px-4 py-3">Airtel</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="px-4 py-3">Coverage</td>
                <td className="px-4 py-3">Nationwide, including remote areas</td>
                <td className="px-4 py-3">Urban/semi-urban heavy</td>
                <td className="px-4 py-3">Urban/industrial corridors</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Latency</td>
                <td className="px-4 py-3">Sub-50ms (LEO)</td>
                <td className="px-4 py-3">Variable (terrestrial)</td>
                <td className="px-4 py-3">Variable (terrestrial)</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Deployment Speed</td>
                <td className="px-4 py-3">Days</td>
                <td className="px-4 py-3">Months/years for fiber</td>
                <td className="px-4 py-3">Months/years for fiber</td>
              </tr>
              <tr>
                <td className="px-4 py-3">CapEx</td>
                <td className="px-4 py-3">Low at edge (user terminals)</td>
                <td className="px-4 py-3">High (towers/fiber)</td>
                <td className="px-4 py-3">High (towers/fiber)</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Reliability</td>
                <td className="px-4 py-3">Mesh redundancy in space</td>
                <td className="px-4 py-3">Single-path constraints</td>
                <td className="px-4 py-3">Single-path constraints</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  );
};

export default Sections;
