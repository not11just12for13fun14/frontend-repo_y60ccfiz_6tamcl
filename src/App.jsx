import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-black font-inter text-white">
      <Navbar />
      <Hero />
      <Sections />
      <CTA />
      <footer className="border-t border-white/10 bg-black/80 py-10 text-center text-xs text-cyan-200/70">
        © 2025 Aircel x Starlink — The Comeback From Space
      </footer>
    </div>
  );
}

export default App;
